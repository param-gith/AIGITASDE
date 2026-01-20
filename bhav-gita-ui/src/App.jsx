import { useState, useEffect } from "react";
import Welcome from "./screens/Welcome";
import Login from "./screens/Login";
import Home from "./screens/Home";
import Detail from "./screens/Detail";
import Reflect from "./screens/Reflect";
import WeeklySummary from "./screens/WeeklySummary";


export default function App() {
  const [step, setStep] = useState("welcome");
  const [selected, setSelected] = useState(null);
  const [reflections, setReflections] = useState([]);
  const [userName, setUserName] = useState("");


  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("reflections") || "[]");
    setReflections(saved);
  }, []);

  const addReflection = (entry) => {
    const updated = [entry, ...reflections];
    setReflections(updated);
    localStorage.setItem("reflections", JSON.stringify(updated));
  };

  const updateReflection = (index, entry) => {
    const updated = [...reflections];
    updated[index] = entry;
    setReflections(updated);
    localStorage.setItem("reflections", JSON.stringify(updated));
  };

  const deleteReflection = (index) => {
    const updated = reflections.filter((_, i) => i !== index);
    setReflections(updated);
    localStorage.setItem("reflections", JSON.stringify(updated));
  };

  const clearReflections = () => {
    setReflections([]);
    localStorage.removeItem("reflections");
  };

  if (step === "welcome") {
    return <Welcome onSubmit={() => setStep("login")} />;
  }
if (step === "login") {
  return (
    <Login
      onSubmit={(name) => {
        setUserName(name);
        setStep("home");
      }}
    />
  );
}


if (step === "detail") {
  return <Detail bhav={selected} onBack={() => setStep("home")} />;
}

  if (step === "reflect") {
  return (
    <Reflect
      reflections={reflections}
      onSave={addReflection}
      onUpdate={updateReflection}
      onDelete={deleteReflection}
      onBack={() => setStep("home")}
      onSummary={() => setStep("summary")}
    />
  );
}

  if (step === "summary") {
  return (
    <WeeklySummary
      reflections={reflections}
      onBack={() => setStep("reflect")}
    />
  );
}

  return (
    <Home
      onSelect={(e) => {
        setSelected(e);
        setStep("detail");
      }}
      onReflect={() => setStep("reflect")}
    />
  );
}
