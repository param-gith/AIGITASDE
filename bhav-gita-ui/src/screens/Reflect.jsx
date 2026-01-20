import { useState } from "react";


const emotions = [
  { emoji: "😊", label: "Happy", color: "#FFE29A" },
  { emoji: "😔", label: "Sad", color: "#CDE7FF" },
  { emoji: "🧘", label: "Peace", color: "#CFF5E7" },
  { emoji: "😟", label: "Worried", color: "#E5E5E5" },
  { emoji: "😰", label: "Anxious", color: "#F6C1E7" },
  { emoji: "😠", label: "Angry", color: "#FFC1B6" },
  { emoji: "🥱", label: "Lazy", color: "#EADCF8" },
  { emoji: "🌙", label: "Lonely", color: "#D6E4F0" },
  { emoji: "✨", label: "Overjoyed", color: "#FFE8CC" },
];

export default function Reflect({
  onSave,
  onUpdate,
  onBack,
  reflections,
  onDelete,
  onSummary
}) {
  const [selected, setSelected] = useState(null);
  const [text, setText] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const canSave = selected && text.trim().length > 0;

  const handleSave = () => {
    if (!canSave) return;

    const entry = {
      emoji: selected.emoji,
      color: selected.color,
      text: text.trim(),
      date: new Date().toLocaleDateString(),
    };

    if (editIndex !== null) {
      onUpdate(editIndex, entry);
    } else {
      onSave(entry);
    }

    setSelected(null);
    setText("");
    setEditIndex(null);
  };

  const startEdit = (r, index) => {
    setSelected(
      emotions.find((e) => e.emoji === r.emoji) || {
        emoji: r.emoji,
        color: r.color,
        label: "",
      }
    );
    setText(r.text);
    setEditIndex(index);
  };

  return (
    <div className="container" style={{ overflowY: "auto" }}>
      <div className="content">
        <button className="back" onClick={() => onBack()}>← Back</button>


        <h1 className="title">Reflect</h1>
        <button
  onClick={onSummary}
    style={{
    position: "fixed",
    top: 20,
    right: 50,
    background: "none",
    border: "none",
    color: "#8b1e1e",
    fontSize: 34,
    cursor: "pointer",
    zIndex: 1000,
  }}
>
  Weekly Summary →
</button>


        {/* Mood row */}
        <div
          style={{
            display: "flex",
            gap: 26.9,
            overflowX: "hidden",
            marginBottom: 40,
          }}
        >
          {emotions.map((e) => (
            <div
              key={e.label}
              onClick={() => setSelected(e)}
              style={{
                background: e.color,
                minWidth: 125,
                padding: "18px 14px",
                borderRadius: 22,
                textAlign: "center",
                cursor: "pointer",
                boxShadow: "0 10px 24px rgba(0,0,0,0.08)",
                border: "1px solid rgba(0,0,0,0.06)",
              }}
            >
              <div style={{ fontSize: 60 }}>{e.emoji}</div>
              <div style={{ fontSize: 18 }}>{e.label}</div>
            </div>
          ))}
        </div>

        {/* Writing box */}
        <textarea
          placeholder="Write your thoughts here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{
            width: "100%",
            height: 180,
            borderRadius: 18,
            padding: 16,
            fontSize: 28,
            border: "1px solid #ddd",
            background: selected ? selected.color : "#fff",
            marginBottom: 16,
            resize: "none",
          }}
        />

        <button
          className="welcome-btn"
          disabled={!canSave}
          onClick={handleSave}
          style={{
            opacity: canSave ? 1 : 0.5,
            maxWidth: "100%",
            height: 82,
            margin: "24px auto",
            display: "block",
          }}
        >
          {editIndex !== null ? "Update Reflection" : "Save Reflection"}
        </button>

        {/* Saved reflections */}
        <div style={{ marginTop: 30 }}>
          {reflections.map((r, i) => (
            <ReflectionCard
              key={i}
              data={r}
              onDelete={() => onDelete(i)}
              onEdit={() => startEdit(r, i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ReflectionCard({ data, onDelete, onEdit }) {
  const [showActions, setShowActions] = useState(false);

  return (
    <div
      onDoubleClick={() => setShowActions((s) => !s)}
      style={{
        background: data.color,
        borderRadius: 22,
        padding: "22px 24px 20px 24px",
        marginBottom: 16,
        marginRight: "auto",
        position: "relative",
        width: "100%",
        alignSelf: "flex-start",
        cursor: "pointer",
      }}
      title="Double tap to edit or delete"
    >
      <span
        style={{
          position: "absolute",
          top: 12,
          left: 16,
          fontSize: 48,
        }}
      >
        {data.emoji}
      </span>

      <p
        style={{
          marginLeft: 44,
          marginBottom: 10,
          fontSize: 30,
          lineHeight: 1.6,
          color: "#2b2b2b",
        }}
      >
        {data.text}
      </p>

      <small
        style={{
          position: "absolute",
          right: 16,
          bottom: 10,
          fontSize: 13,
          color: "#6f6558",
        }}
      >
        {data.date}
      </small>

      {showActions && (
        <div
          style={{
            position: "absolute",
            top: 8,
            right: 8,
            display: "flex",
            gap: 8,
          }}
        >
          <button
            onClick={onEdit}
            style={{
              border: "none",
              borderRadius: 10,
              padding: "6px 10px",
              background: "rgba(0,0,0,0.15)",
              cursor: "pointer",
            }}
          >
            ✏️
          </button>
          <button
            onClick={onDelete}
            style={{
              border: "none",
              borderRadius: 10,
              padding: "6px 10px",
              background: "rgba(0,0,0,0.15)",
              cursor: "pointer",
            }}
          >
            🗑️
          </button>
        </div>
      )}
    </div>
  );
}
