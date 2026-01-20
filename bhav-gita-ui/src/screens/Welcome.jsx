export default function Welcome({ onSubmit }) {
  return (
    <div className="welcome welcome-bg">
      <div className="welcome-card">
        <h1 className="welcome-title">
          Welcome to<br />Feel Me
        </h1>

        <div className="welcome-points">
          <div className="point">
            <span className="icon">😊</span>
            <div>
              <h3>Select Your Mood</h3>
              <p>Choose how you feel and receive wisdom that comforts you.</p>
            </div>
          </div>

          <div className="point">
            <span className="icon">🕉️</span>
            <div>
              <h3>Personalized Shlokas</h3>
              <p>Each emotion is matched with a verse from the Gita.</p>
            </div>
          </div>

          <div className="point">
            <span className="icon">📖</span>
            <div>
              <h3>Daily Reflection</h3>
              <p>Pause, reflect, and carry wisdom into your day.</p>
            </div>
          </div>
        </div>

        <button className="welcome-btn" onClick={onSubmit}>
          Continue
        </button>
      </div>
    </div>
  );
}
