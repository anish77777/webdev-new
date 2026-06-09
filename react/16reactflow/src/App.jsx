import { useState, Suspense } from 'react';
import ErrorBoundary from './ErrorBoundary.jsx';
import AsyncUserCard from './AsyncUserCard.jsx';
import userAvatar from './assets/user_avatar.png';
import './App.css';

// Simulation API function returning a Promise
const fetchUserProfile = (delay, shouldThrowError) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldThrowError) {
        reject(
          new Error("HTTP Error 500: Database connection timed out while reading records.")
        );
      } else {
        resolve({
          name: "Elara Vance",
          role: "Senior Staff Engineer",
          email: "elara.vance@innovate.tech",
          avatar: userAvatar,
          location: "Seattle, WA",
          joined: "March 2023",
        });
      }
    }, delay);
  });
};

// Skeleton Loader Component for Suspense fallback
const SkeletonLoader = () => (
  <div className="skeleton-card">
    <div className="skeleton-avatar-wrapper">
      <div className="skeleton-circle" />
    </div>
    <div className="skeleton-body">
      <div className="skeleton-line title" />
      <div className="skeleton-line subtitle" />
      <div className="skeleton-line text" />
      <div className="skeleton-footer">
        <div className="skeleton-line" />
        <div className="skeleton-line" />
      </div>
    </div>
  </div>
);

function App() {
  const [profilePromise, setProfilePromise] = useState(null);
  const [delay, setDelay] = useState(2000);
  const [activeTab, setActiveTab] = useState('docs');
  const [resetKey, setResetKey] = useState(0);

  const handleSimulateSuccess = () => {
    setProfilePromise(fetchUserProfile(delay, false));
    setResetKey((prev) => prev + 1);
  };

  const handleSimulateError = () => {
    setProfilePromise(fetchUserProfile(delay, true));
    setResetKey((prev) => prev + 1);
  };

  const handleReset = () => {
    setProfilePromise(null);
    setResetKey((prev) => prev + 1);
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1>React 19 Suspense & Error Boundary</h1>
        <p className="subtitle">
          Interactive simulator demonstrating how modern React handles asynchronous loading
          states and component errors using the new <code>use()</code> hook.
        </p>
      </header>

      <div className="dashboard-grid">
        {/* Simulator Controls & Demo */}
        <div className="panel">
          <h2 className="panel-title">
            <span>⚙️</span> Interactive Simulator
          </h2>

          <div className="control-group">
            <label className="control-label">Network Delay: <span className="delay-badge">{(delay / 1000).toFixed(1)}s</span></label>
            <div className="slider-container">
              <input
                type="range"
                min="500"
                max="5000"
                step="500"
                value={delay}
                onChange={(e) => setDelay(Number(e.target.value))}
              />
            </div>
          </div>

          <div className="btn-grid">
            <button onClick={handleSimulateSuccess} className="btn btn-primary">
              ⚡ Load Profile (Success)
            </button>
            <button onClick={handleSimulateError} className="btn btn-danger">
              💥 Load Profile (Error)
            </button>
            {profilePromise && (
              <button onClick={handleReset} className="btn btn-secondary btn-reset">
                🔄 Reset Simulator
              </button>
            )}
          </div>

          <h3 className="control-label" style={{ marginTop: '10px', marginBottom: '4px' }}>Demo Sandbox</h3>
          <div className="demo-area">
            {profilePromise ? (
              <ErrorBoundary resetKey={resetKey} onReset={handleReset}>
                <Suspense fallback={<SkeletonLoader />}>
                  <AsyncUserCard userDataPromise={profilePromise} />
                </Suspense>
              </ErrorBoundary>
            ) : (
              <div className="placeholder-text">
                <p style={{ fontSize: '30px', margin: 0 }}>💡</p>
                <h3>Sandbox Idle</h3>
                <p>Click one of the buttons above to load user data and trigger loading and error boundaries.</p>
              </div>
            )}
          </div>
        </div>

        {/* Documentation & Snippets */}
        <div className="panel">
          <h2 className="panel-title">
            <span>📚</span> Interactive Docs
          </h2>

          <div className="tabs-container">
            <div className="tabs-nav">
              <button
                className={`tab-btn ${activeTab === 'docs' ? 'active' : ''}`}
                onClick={() => setActiveTab('docs')}
              >
                Concepts
              </button>
              <button
                className={`tab-btn ${activeTab === 'suspense' ? 'active' : ''}`}
                onClick={() => setActiveTab('suspense')}
              >
                Suspense Code
              </button>
              <button
                className={`tab-btn ${activeTab === 'errorboundary' ? 'active' : ''}`}
                onClick={() => setActiveTab('errorboundary')}
              >
                ErrorBoundary Code
              </button>
              <button
                className={`tab-btn ${activeTab === 'user' ? 'active' : ''}`}
                onClick={() => setActiveTab('user')}
              >
                Async Card Code
              </button>
            </div>

            <div className="tab-content">
              {activeTab === 'docs' && (
                <>
                  <div className="info-box">
                    <strong>React 19 <code>use()</code> Hook:</strong>
                    <br />
                    Unlike standard hooks, <code>use()</code> can be called conditionally and nested inside loops or blocks. When passed a promise, it suspends rendering until the promise resolves, integrating seamlessly with <code>Suspense</code>.
                  </div>
                  <div className="info-box">
                    <strong>Suspense Fallback:</strong>
                    <br />
                    While the promise passed to <code>use()</code> is pending, React catches the suspended state and displays the nearest <code>Suspense</code> fallback component (e.g., our skeleton loading state).
                  </div>
                  <div className="info-box">
                    <strong>ErrorBoundary Catchment:</strong>
                    <br />
                    If the promise rejects, the thrown error bubbles up. The closest parent <code>ErrorBoundary</code> catches the error and renders its fallback UI, preventing the entire page from crashing.
                  </div>
                </>
              )}

              {activeTab === 'suspense' && (
                <>
                  <h4>How they are combined in JSX:</h4>
                  <pre className="code-snippet">
{`<ErrorBoundary resetKey={resetKey} onReset={handleReset}>
  <Suspense fallback={<SkeletonLoader />}>
    {/* Component containing the React 19 "use" hook */}
    <AsyncUserCard userDataPromise={profilePromise} />
  </Suspense>
</ErrorBoundary>`}
                  </pre>
                </>
              )}

              {activeTab === 'errorboundary' && (
                <>
                  <h4>ErrorBoundary.jsx (Class Component):</h4>
                  <pre className="code-snippet">
{`class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught: ", error, errorInfo);
  }

  // Resets error boundary state
  resetBoundary = () => {
    this.setState({ hasError: false, error: null });
    if (this.props.onReset) this.props.onReset();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-fallback-card">
          <h3>Rendering Error</h3>
          <p className="error-message">{this.state.error.message}</p>
          <button onClick={this.resetBoundary}>Try Again</button>
        </div>
      );
    }
    return this.props.children;
  }
}`}
                  </pre>
                </>
              )}

              {activeTab === 'user' && (
                <>
                  <h4>AsyncUserCard.jsx using <code>use()</code>:</h4>
                  <pre className="code-snippet">
{`import { use } from 'react';

function AsyncUserCard({ userDataPromise }) {
  // Consuming the promise. This triggers Suspense while
  // pending, and throws to ErrorBoundary if rejected.
  const user = use(userDataPromise);

  return (
    <div className="user-profile-card">
      <img src={user.avatar} alt={user.name} />
      <h3>{user.name}</h3>
      <p>{user.role}</p>
      <p>{user.email}</p>
    </div>
  );
}`}
                  </pre>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
