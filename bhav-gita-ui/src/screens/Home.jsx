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
  { emoji: "🤩", label: "Excited", color: "#FFF3B0" },
  { emoji: "🌊", label: "Overwhelmed", color: "#CDEFFF" },
  { emoji: "✨", label: "Overjoyed", color: "#FFE8CC" },
  { emoji: "🛡️", label: "Protective", color: "#E3F2E1" },
];

export default function Home({ userName, onLogout, onSelect, onReflect }) {
  return (
    <div className="container">
      <div className="content">
        <h1 className="title">How are you feeling today?</h1>

        <div className="grid">
          {emotions.map((e) => (
            <div
              key={e.label}
              className="tile"
              style={{ background: e.color }}
              onClick={() => onSelect(`I feel ${e.label.toLowerCase()}`)}
            >
              <div className="emoji">{e.emoji}</div>
              <div className="label">{e.label}</div>
            </div>
          ))}
        </div>
      </div>

      <span className="write-emoji" onClick={onReflect}>✍️</span>

    </div>
  );
}

