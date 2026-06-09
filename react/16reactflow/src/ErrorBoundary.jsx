import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  resetBoundary = () => {
    this.setState({ hasError: false, error: null });
    if (this.props.onReset) {
      this.props.onReset();
    }
  };

  componentDidUpdate(prevProps) {
    // If the resetKey changes, reset the error state automatically
    if (this.state.hasError && prevProps.resetKey !== this.props.resetKey) {
      this.setState({ hasError: false, error: null });
    }
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return typeof this.props.fallback === 'function'
          ? this.props.fallback({ error: this.state.error, reset: this.resetBoundary })
          : this.props.fallback;
      }

      return (
        <div className="error-fallback-card">
          <div className="error-icon">⚠️</div>
          <h3>Rendering Error</h3>
          <p className="error-message">
            {this.state.error?.message || String(this.state.error)}
          </p>
          <button onClick={this.resetBoundary} className="btn btn-danger">
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
