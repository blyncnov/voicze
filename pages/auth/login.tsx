import React from "react";
import Link from "next/link";

// React icons
import { TfiFacebook, TfiGoogle } from "react-icons/tfi";

// Icon Style
const IconCardStyle = {
  fontSize: "1.5em",
};

const Login = () => {
  return (
    <div>
      <div className="auth_section">
        <div className="auth_container">
          <div className="auth_grid_column">
            <h1>
              Amplify Your Brand With{" "}
              <span>
                <Link href="/">Voicze</Link>
              </span>
            </h1>
            <p>
              Tools for promoting the giveaway, tracking performance metrics,
              and verifying entries.
            </p>
          </div>
          <div className="auth_grid_column">
            <div>
              <h1>Sign in</h1>
              <p>
                New to Voicze?{" "}
                <span>
                  <Link href="/auth/register">Create an account</Link>
                </span>
              </p>
            </div>
            <br />
            <div>
              <form className="auth_form" autoComplete="false">
                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    required
                  />
                </div>
                <div className="auth_options">
                  <Link href="/auth/reset">Forgot your password?</Link>
                </div>
                <button type="submit">Log in</button>
                <li style={{ fontSize: "13px" }}>
                  By continuing, you agree <Link href="/">Voicze</Link>{" "}
                  <span>Terms of Service</span> and <span>Privacy Policy.</span>
                </li>
              </form>
              <div className="another_login_option">
                <h2 style={{ textAlign: "center" }}>OR</h2>
              </div>
              <div className="social_media_login_option">
                <div className="social_btn">
                  <button id="facebook">
                    <TfiFacebook style={IconCardStyle} />
                    <span>Facebook</span>
                  </button>
                </div>
                <div className="social_btn">
                  <button id="google">
                    <TfiGoogle style={IconCardStyle} />
                    <span>Google</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
