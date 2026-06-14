"use client";

import { useEffect } from "react";

export default function DSAPage() {
  useEffect(() => {
    document.body.classList.add("dsa-page", "dark-theme");

    // Load scripts in order: data first, then main logic
    const loadScript = (src: string) =>
      new Promise<void>((resolve) => {
        const s = document.createElement("script");
        s.src = src;
        s.onload = () => resolve();
        document.body.appendChild(s);
      });

    loadScript("/dsa/data/syllabus.js")
      .then(() => loadScript("/dsa/data/problems.js"))
      .then(() => loadScript("/dsa/index.js"));

    return () => {
      document.body.classList.remove("dsa-page", "dark-theme");
    };
  }, []);

  return (
    <>
      <link rel="stylesheet" href="/dsa/style.css" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&family=JetBrains+Mono:wght@400;700&display=swap"
        rel="stylesheet"
      />

      {/* DSA Navbar */}
      <nav className="navbar">
        <a href="/" className="logo" style={{ textDecoration: "none", cursor: "pointer" }}>
          <img src="/dsa/photos/lf.png" alt="Logo" className="logo-icon-img" />
          <span className="logo-text">
            DSA<span className="highlight">Java</span>
          </span>
        </a>
        <div className="nav-actions">
          <button id="menu-toggle" className="menu-btn hidden-lg">
            <i className="fa-solid fa-bars"></i>
          </button>
          <button id="theme-toggle" className="theme-btn">
            <i className="fa-solid fa-sun light-icon"></i>
            <i className="fa-solid fa-moon dark-icon"></i>
          </button>
          <div className="user-avatar" title="Radhe Radhe ✨">
            <span>🦚</span>
          </div>
        </div>
      </nav>

      {/* App Main Layout */}
      <main className="app-container">
        <aside className="sidebar">
          <div className="sidebar-header">
            <h3>
              <i className="fa-solid fa-list-check"></i> Grind Checklist
            </h3>
          </div>
          <div className="sidebar-content" id="sidebar-content"></div>
          <div className="sidebar-footer">
            <img src="/dsa/photos/lf.png" alt="Logo" />
            <span>Prepared by Prakash Kumar</span>
          </div>
        </aside>

        <section className="content-area">
          <div className="welcome-state" id="welcome-state">
            <div className="glass-card welcome-card">
              <h1>
                Ready to <span className="highlight">Grind?</span>
              </h1>
              <p>Select a problem from the left menu to start dominating your DSA journey.</p>
              <div className="floating-icons">
                <i className="fa-brands fa-java fa-3x"></i>
                <i className="fa-solid fa-code fa-2x"></i>
                <i className="fa-solid fa-bug-slash fa-2x"></i>
              </div>
            </div>
          </div>

          <div className="problem-state hidden" id="problem-state">
            <div className="problem-header">
              <h2 id="problem-title">Chapter X - Problem Y</h2>
              <div className="difficulty-badge">Medium</div>
            </div>

            <div className="segment-tabs">
              <button className="tab-btn active" data-tab="explanation">
                <i className="fa-solid fa-book-open"></i> Explanation
              </button>
              <button className="tab-btn" data-tab="code">
                <i className="fa-solid fa-laptop-code"></i> Code
              </button>
              <button className="tab-btn" data-tab="screenshots">
                <i className="fa-solid fa-image"></i> SS
              </button>
              <button className="tab-btn" data-tab="homework">
                <i className="fa-solid fa-pen-clip"></i> Homework
              </button>
              <button className="tab-btn" data-tab="video">
                <i className="fa-brands fa-youtube" style={{ color: "#ff0000" }}></i> Video
              </button>
              <button className="tab-btn" data-tab="funfact">
                <i className="fa-solid fa-lightbulb"></i> Fun Fact
              </button>
            </div>

            <div className="segment-content-container glass-card">
              {/* Explanation */}
              <div className="segment-pane active" id="pane-explanation">
                <div id="explanation-content">
                  <h3>Problem Explanation</h3>
                  <img id="problem-image" alt="Problem Visual" style={{ width: "100%", maxWidth: "500px", borderRadius: "8px", margin: "1rem 0", display: "none", boxShadow: "var(--shadow-soft)", border: "1px solid var(--border-color)" }} />
                  <p id="explanation-text">This is a detailed explanation of the problem.</p>
                  <ul className="cool-list" id="explanation-details">
                    <li>Understand the base cases</li>
                    <li>Optimize loop performance</li>
                    <li>Dry run the approach on paper</li>
                  </ul>
                  <div id="leetcode-details" className="hidden">
                    <div className="leetcode-io-card"><div id="io-content"></div></div>
                    <div className="constraints-section" style={{ marginTop: "1.5rem" }}>
                      <h4 style={{ color: "var(--accent-secondary)", marginBottom: "0.5rem", fontSize: "1.1rem" }}>
                        <i className="fa-solid fa-triangle-exclamation"></i> Constraints:
                      </h4>
                      <ul id="constraints-list" className="constraints-list"></ul>
                    </div>
                  </div>
                </div>
                <div id="explanation-fallback" className="hidden" style={{ marginTop: "1rem" }}>
                  <div className="glass-card" style={{ padding: "1.5rem", textAlign: "center", border: "1px dashed var(--accent-secondary)" }}>
                    <h3 style={{ color: "var(--accent-primary)" }}>Explanation is Cooking 🍳</h3>
                    <p style={{ color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
                      While Senpai writes this solution, let&apos;s play <b style={{ color: "var(--text-primary)" }}>Rock, Paper, Scissors</b>! ✊✋✌️
                    </p>
                    <div id="rps-game-area" style={{ background: "rgba(0,0,0,0.1)", padding: "1.5rem", borderRadius: "12px", border: "1px solid var(--border-color)" }}>
                      <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", marginBottom: "1.5rem", alignItems: "center", flexWrap: "wrap" }}>
                        <div className="score-box" style={{ flex: 1, minWidth: "80px" }}>
                          <h4 style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: "5px" }}>You</h4>
                          <h2 id="rps-player-score" style={{ color: "#4ade80", fontSize: "2rem" }}>0</h2>
                          <div id="rps-player-hand" style={{ fontSize: "3rem", marginTop: "5px" }}>🤜</div>
                        </div>
                        <div style={{ fontSize: "1.2rem", fontWeight: "bold", color: "var(--text-secondary)", padding: "0 0.5rem" }}>VS</div>
                        <div className="score-box" style={{ flex: 1, minWidth: "80px" }}>
                          <h4 style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: "5px" }}>Time</h4>
                          <h2 id="rps-comp-score" style={{ color: "#ef4444", fontSize: "2rem" }}>0</h2>
                          <div id="rps-comp-hand" style={{ fontSize: "3rem", marginTop: "5px" }}>🤛</div>
                        </div>
                      </div>
                      <p id="rps-message" style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: "1.5rem", minHeight: "28px" }}>Choose your weapon!</p>
                      <div className="rps-buttons" style={{ display: "flex", gap: "0.8rem", justifyContent: "center", flexWrap: "wrap" }}>
                        <button className="hc-btn" onClick={() => (window as any).playRPS("rock")} title="Rock">✊</button>
                        <button className="hc-btn" onClick={() => (window as any).playRPS("paper")} title="Paper">✋</button>
                        <button className="hc-btn" onClick={() => (window as any).playRPS("scissors")} title="Scissors">✌️</button>
                      </div>
                      <button id="rps-restart" onClick={() => (window as any).resetRPS()} className="hidden" style={{ marginTop: "1.5rem", padding: "0.6rem 1.5rem", background: "var(--accent-primary)", border: "none", borderRadius: "8px", fontWeight: "bold", color: "white", cursor: "pointer" }}>Reset Game 🔄</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Code */}
              <div className="segment-pane" id="pane-code">
                <div id="code-content">
                  <div className="code-header">
                    <div className="code-lang-tabs">
                      <button className="code-lang-btn active" data-lang="java">Java</button>
                      <button className="code-lang-btn" data-lang="cpp">C++</button>
                      <button className="code-lang-btn" data-lang="python">Python</button>
                      <button className="code-lang-btn" data-lang="js">JS</button>
                    </div>
                    <button className="btn-copy"><i className="fa-regular fa-copy"></i></button>
                  </div>
                  <pre><code className="language-java" id="code-block">{`class Solution {
    public void solve() {
        System.out.println("It's giving O(1) time complexity vibes ✨");
    }
}`}</code></pre>
                </div>
                <div id="code-fallback" className="hidden" style={{ textAlign: "center", padding: "3rem 1rem", marginTop: "1.5rem", background: "var(--bg-secondary)", borderRadius: "var(--radius-md)", border: "1px dashed var(--border-color)" }}>
                  <span style={{ fontSize: "4rem", display: "block", marginBottom: "1rem" }}>💻</span>
                  <h3 style={{ color: "var(--accent-primary)" }}>Code is Compiling... In Senpai&apos;s Brain!</h3>
                  <p style={{ color: "var(--text-secondary)", marginTop: "0.5rem" }}>The optimal solution is being crafted.</p>
                </div>
              </div>

              {/* Screenshots */}
              <div className="segment-pane" id="pane-screenshots">
                <div id="ss-content">
                  <h3>Execution Screenshots</h3>
                  <p className="sub-text">Assets linked from the local /assets folder</p>
                  <div className="ss-grid" id="ss-grid"></div>
                </div>
                <div id="ss-fallback" className="hidden" style={{ textAlign: "center", padding: "3rem 1rem", marginTop: "1.5rem", background: "var(--bg-secondary)", borderRadius: "var(--radius-md)", border: "1px dashed var(--border-color)" }}>
                  <span style={{ fontSize: "4rem", display: "block", marginBottom: "1rem" }}>📸</span>
                  <h3 style={{ color: "var(--accent-primary)" }}>No Snaps Yet!</h3>
                  <p style={{ color: "var(--text-secondary)", marginTop: "0.5rem" }}>Senpai hasn&apos;t taken screenshots for this problem yet.</p>
                </div>
              </div>

              {/* Homework */}
              <div className="segment-pane" id="pane-homework">
                <h3>Your Homework Assignment</h3>
                <div className="homework-card" id="homework-content">
                  <i className="fa-solid fa-clipboard-question homework-icon"></i>
                  <p>Try to solve this without looking at the optimal solution first.</p>
                </div>
                <div id="homework-fallback" className="hidden" style={{ textAlign: "center", padding: "2rem 1rem", marginTop: "1.5rem", background: "var(--bg-secondary)", borderRadius: "var(--radius-md)", border: "1px dashed var(--border-color)" }}>
                  <h3 style={{ color: "var(--accent-primary)" }}>No Homework Today!</h3>
                  <p style={{ color: "var(--text-secondary)", marginTop: "0.5rem", marginBottom: "1.5rem" }}>Senpai gave you a day off. Go touch some grass or hit the gym! 💪</p>
                  <div style={{ background: "rgba(0,0,0,0.1)", padding: "1.5rem", borderRadius: "12px", border: "1px solid var(--border-color)", display: "inline-block", minWidth: "250px" }}>
                    <div id="gym-emoji" style={{ fontSize: "5rem", display: "block", marginBottom: "1rem" }}>🏋️‍♂️</div>
                    <h4 style={{ color: "var(--text-secondary)", fontSize: "1.2rem" }}>Reps: <span id="gym-reps" style={{ color: "#4ade80", fontSize: "1.8rem" }}>0</span></h4>
                    <button onClick={() => (window as any).liftWeight()} className="hc-btn" style={{ width: "auto", padding: "0.5rem 1.5rem", marginTop: "1rem", borderRadius: "8px" }}>Pump Iron! ⬆️</button>
                  </div>
                </div>
              </div>

              {/* Video */}
              <div className="segment-pane" id="pane-video">
                <h3><i className="fa-brands fa-youtube" style={{ color: "#ff0000" }}></i> Problem Breakdown</h3>
                <div id="video-content">
                  <p className="sub-text">Watch the definitive video solution for this problem here.</p>
                  <div className="video-container" style={{ marginTop: "1rem", position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-soft)" }}>
                    <iframe id="video-frame" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }} src="about:blank" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  </div>
                </div>
                <div id="video-placeholder" className="hidden" style={{ textAlign: "center", padding: "2rem 1rem", background: "var(--bg-secondary)", borderRadius: "var(--radius-md)", border: "1px dashed var(--border-color)", marginTop: "1.5rem" }}>
                  <span style={{ fontSize: "4rem", display: "block", marginBottom: "1rem" }}>🧑‍🍳</span>
                  <h3 style={{ color: "var(--accent-primary)" }}>Senpai is still cooking!</h3>
                  <p style={{ color: "var(--text-secondary)", marginTop: "0.5rem" }}>The video tutorial is on the way. Stay tuned! 🚀</p>
                </div>
              </div>

              {/* Fun Fact */}
              <div className="segment-pane" id="pane-funfact">
                <div className="funfact-wrapper">
                  <span className="funfact-emoji">🤯</span>
                  <h3>Did you know?</h3>
                  <p id="funfact-text">Fun facts related to this algorithm will be shown here.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

    </>
  );
}
