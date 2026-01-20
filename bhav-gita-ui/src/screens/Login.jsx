import { useState, useEffect, useRef } from "react";

export default function Login({ onSubmit }) {
  const [name, setName] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const isValid = name.trim().length > 0;

  const submit = () => {
    if (isValid) onSubmit(name.trim());
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(180deg, #fff7f5, #ffffff)",
      }}
    >
      <div
  style={{
    width: "100%",
    maxWidth: "820px",          // bigger card
    padding: "64px 48px",       // more breathing space
    textAlign: "center",
    borderRadius: "28px",
    background: "#ffffff",
    boxShadow: "0 30px 60px rgba(0,0,0,0.08)",
  }}
>

        <h1
          style={{
            fontSize: "36px",
            fontWeight: 700,
            marginBottom: "8px",
            color: "#2b2b2b",
          }}
        >
          Feel Me
        </h1>

        <p
          style={{
            fontSize: "36px",
            color: "#6b6b6b",
            marginBottom: "32px",
          }}
        >
          A quiet space for reflection and guidance.
        </p>

        <input
          ref={inputRef}
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && submit()}
          style={{
            width: "100%",
            padding: "14px 18px",
            fontSize: "36px",
            borderRadius: "14px",
            border: "1px solid #e5e5e5",
            outline: "none",
            transition: "all 0.2s ease",
          }}
          onFocus={(e) => (e.target.style.borderColor = "#8b1e1e")}
          onBlur={(e) => (e.target.style.borderColor = "#e5e5e5")}
        />

        <button
          disabled={!isValid}
          onClick={submit}
          style={{
            marginTop: "24px",
            width: "100%",
            padding: "14px 0",
            borderRadius: "16px",
            border: "none",
            background: isValid ? "#8b1e1e" : "#d8b5b5",
            color: "white",
            fontSize: "36px",
            fontWeight: 600,
            cursor: isValid ? "pointer" : "not-allowed",
            transition: "all 0.2s ease",
          }}
        >
          Continue
        </button>

        <p
          style={{
            marginTop: "16px",
            fontSize: "42px",
            color: "#9a9a9a",
          }}
        >
          Your name is used only to personalize your experience.
        </p>
      </div>
    </div>
  );
}
