import { useEffect, useState } from "react";

export default function Detail({ bhav, onBack }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");

    fetch("http://localhost:8000/consult", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ bhav }),
    })
      .then(async (r) => {
        const text = await r.text();
        if (!r.ok) throw new Error(text);
        return JSON.parse(text);
      })
      .then((d) => {
        setData(d);
        setLoading(false);
      })
      .catch((e) => {
        setError(e.message);
        setLoading(false);
      });
  }, [bhav]);

  return (
    <div className="container">
      <button className="back" onClick={onBack}>← Back</button>

{loading && (
  <div className="loader-wrap">
    <div className="spinner"></div>
    <div className="loader-text">Consulting KrishnaGPT…</div>
  </div>
)}

      {error && (
        <div className="card">
          <strong>Error:</strong>
          <pre style={{ whiteSpace: "pre-wrap" }}>{error}</pre>
        </div>
      )}

{data && !loading && (
  <>
    {/* 1. Sanskrit Shloka */}
    <div className="card shloka" style={{ fontSize: 32, lineHeight: 1.6 }}>
      {data.shloka}
    </div>

    {/* 2. Thought */}
    <div className="card">
      <div style={{ fontSize: 12, letterSpacing: 2, opacity: 0.6 }}>
        THOUGHT
      </div>
      <div style={{ fontSize: 32, lineHeight: 1.6, marginTop: 8 }}>
        {data.thought}
      </div>
    </div>

    {/* 3. Meaning */}
    <div className="card">
      <div style={{ fontSize: 12, letterSpacing: 2, opacity: 0.6 }}>
        MEANING
      </div>
      <div style={{ fontSize: 32, lineHeight: 1.6, marginTop: 8 }}>
        {data.meaning}
      </div>
    </div>
  </>
)}

    </div>
  );
}
