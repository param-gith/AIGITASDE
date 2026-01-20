export default function WeeklySummary({ onBack }) {
  const weekData = [
    { day: "Sun", emotion: "" },
    { day: "Mon", emotion: "Happy" },
    { day: "Tue", emotion: "Happy" },
    { day: "Wed", emotion: "" },
    { day: "Thu", emotion: "" },
    { day: "Fri", emotion: "" },
    { day: "Sat", emotion: "" },
  ];

const counts = weekData.reduce((acc, r) => {
  if (!r.emotion) return acc; // ignore empty days
  acc[r.emotion] = (acc[r.emotion] || 0) + 1;
  return acc;
}, {});


  const dominant = Object.entries(counts).sort(
    (a, b) => b[1] - a[1]
  )[0];

  const moodColor = (mood) =>
    mood === "Happy"
      ? "#ffd400"
      : mood === "Peace"
      ? "#34c759"
      : mood === "Sad"
      ? "#5ac8fa"
      : mood === "Worried"
      ? "#ff9f0a"
      : mood === "Angry"
      ? "#ff3b30"
      : "#d1d1d6";

  const adviceMap = {
    Happy:
      "This week was colored by moments of lightness and joy. You allowed yourself to experience warmth—through people, progress, or small victories. Happiness is not something to chase endlessly; it is something to notice. Carry this awareness forward, and even ordinary days will feel meaningful.",
    Sad:
      "A quiet heaviness touched your days. Sadness slows us down so we can feel more deeply. It does not weaken you—it shapes you. Let yourself feel without judgment. Every emotion that passes through you leaves behind wisdom.",
    Angry:
      "Strong emotions surfaced this week. Anger often points to unmet needs or crossed boundaries. Instead of suppressing it, listen to what it protects. When guided with awareness, even anger becomes growth.",
    Peace:
      "You experienced moments of inner stillness. Peace is not the absence of chaos, but the ability to remain centered within it. Protect this space inside you—it is your true home.",
    Worried:
      "Your mind carried restlessness. Worry often lives in futures that never arrive. Each breath anchors you to now. Return here, again and again. Most storms exist only in thought.",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f7efe4",
        display: "flex",
        justifyContent: "center",
        padding: "24px 0",
      }}
    >
      <div style={{ width: "100%", maxWidth: 720 }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 24,
          }}
        >
          <button
            onClick={onBack}
            style={{
              background: "none",
              border: "none",
              color: "#8b1e1e",
              fontSize: 34,
              cursor: "pointer",
            }}
          >
            ← Back
          </button>

          <span style={{ fontWeight: 500, fontSize: 36, opacity: 0.8 }}>
            Weekly Summary
          </span>

          <div style={{ width: 90 }} />
        </div>

        <h1 style={{ fontSize: 35, marginBottom: 12 }}>
          Weekly Mood Story
        </h1>

        {dominant && (
          <div
            style={{
              display: "inline-block",
              padding: "10px 14px",
              borderRadius: 12,
              background: "#f4eacb",
              marginBottom: 24,
            }}
          >
            Dominant Mood: {dominant[0]}
          </div>
        )}

        {/* Mood Breakdown */}
        <div
          style={{
            background: "#cfe6f8",
            borderRadius: 20,
            padding: 20,
            marginBottom: 24,
          }}
        >
          <h3 style={{ marginBottom: 16 }}>Mood Breakdown</h3>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              height: 160,
            }}
          >
            {weekData.map((d, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <div
                  style={{
                    width: 24,
                    height: 110,
                    borderRadius: 12,
                    background: moodColor(d.emotion),
                  }}
                />
                <small style={{ opacity: 0.7 }}>{d.day}</small>
              </div>
            ))}
          </div>
        </div>

        {dominant && (
          <>
            <h3 style={{ marginBottom: 8 }}>Reflection for You</h3>
            <div
              style={{
                background: "#ffffff",
                borderRadius: 16,
                padding: 18,
                lineHeight: 1.6,
                color: "#333",
                fontSize: 25,
              }}
            >
              {adviceMap[dominant[0]]}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
