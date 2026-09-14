'use client'
import "./login.css";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  return (
    <main className="login">
      <div className="login-card">
        
        <div
          onClick={() => {
            router.push("/");
          }}
          className="login-logo"
        >
          <div className="login-icon"></div>
          <div className="login-title">InternFoxx</div>
        </div>

        
        <div className="login-header">
          <h1>Welcome back</h1>
          <p>Log in to continue to your account.</p>
        </div>

        
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>

            <input id="email" type="email" placeholder="Enter your email" />
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

            <a href="/forgot-password">Forgot password?</a>
          </div>

          <button type="submit" className="login-btn">
            Log In
          </button>
        </form>

        
        <div className="divider">
          <span>or</span>
        </div>

        
        <div className="social-login">
          <button type="button" className="social-btn">
            <span className="google-icon">G</span>
            Continue with Google
          </button>
        </div>

        
        <p className="signup-btn">
          Don&apos;t have an account?
          <a href="/signup">Get Started</a>
        </p>
      </div>
    </main>
  );
};

export default Login;
