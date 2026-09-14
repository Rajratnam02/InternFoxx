import "./Login.css";

const Login = () => {
  return (
    <main className="login">
      <div className="login-card">

        {/* Logo */}
        <div className="logo">
          <div className="icon"></div>
          <div className="title">InternFoxx</div>
        </div>

        {/* Header */}
        <div className="login-header">
          <h1>Welcome back</h1>
          <p>Log in to continue to your account.</p>
        </div>

        {/* Email / Password */}
        <form className="login-form">
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
              placeholder="Enter your password"
            />
          </div>

          <div className="form-options">
            <label className="remember">
              <input type="checkbox" />
              Remember me
            </label>

            <a href="/forgot-password">
              Forgot password?
            </a>
          </div>

          <button type="submit" className="login-btn">
            Log In
          </button>
        </form>

        {/* Divider */}
        <div className="divider">
          <span>or</span>
        </div>

        {/* Google Login */}
        <div className="social-login">
          <button type="button" className="social-btn">
            <span className="google-icon">G</span>
            Continue with Google
          </button>
        </div>

        {/* Signup */}
        <p className="signup">
          Don&apos;t have an account?
          <a href="/signup">Get Started</a>
        </p>

      </div>
    </main>
  );
};

export default Login;