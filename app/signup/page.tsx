import './signup.css'
const Signup = () => {
  return (
    <main className="signup">
      <div className="signup-card">
        <div className="signup-logo">
          <div className="signup-logo-icon"></div>
          <div className="signup-logo-title">InternFoxx</div>
        </div>

        <div className="signup-header">
          <h1>Create your account</h1>
          <p>Start your journey with InternFoxx.</p>
        </div>

        <form className="signup-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter your full name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Create a password"
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              id="confirm-password"
              type="password"
              placeholder="Confirm your password"
            />
          </div>

          <label className="terms">
            <input type="checkbox" />
            <span>
              I agree to the{" "}
              <a href="/terms">Terms of Service</a> and{" "}
              <a href="/privacy">Privacy Policy</a>
            </span>
          </label>

          <button type="submit" className="signup-btn">
            Create Account →
          </button>
        </form>

        <div className="divider">
          <span>or</span>
        </div>

        <div className="social-signup">
          <button type="button" className="social-btn">
            <span className="google-icon">G</span>
            Continue with Google
          </button>
        </div>

        <p className="login-link">
          Already have an account?{" "}
          <a href="/login">Log In</a>
        </p>
      </div>
    </main>
  );
};

export default Signup;