import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// React icons
import { FcGoogle } from "react-icons/fc";
import { BsTwitter } from "react-icons/bs";

// Icon Style
const IconCardStyle = {
  fontSize: "1.5em",
  padding: ".1em",
  borderRadius: "3px",
};

const Register = () => {
  const router = useRouter();
  const { email } = router.query;
  console.log(email);
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
              <h1>Create an account</h1>
              <p>
                Already have an account?{" "}
                <span>
                  <Link href="/auth/login">Sign in here!</Link>
                </span>
              </p>
            </div>
            <br />
            <div className="auth_error_logs">
              <p>IDAN, na wrong credentials you enter na!</p>
            </div>
            <br />
            <div>
              <form className="auth_form" autoComplete="false">
                <div>
                  <input
                    type="text"
                    name="first_name"
                    id="first_name"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    placeholder="Last Name"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    defaultValue={email}
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
                <button type="submit">Create account</button>
                <li style={{ fontSize: "15px" }}>
                  By continuing, you agree <Link href="/">Voicze</Link>{" "}
                  <span>Terms of Service</span> and <span>Privacy Policy.</span>
                </li>
              </form>
              <br />
              <br />
              <p style={{ textAlign: "center", fontWeight: "bold" }}>
                Or sign up with your social account
              </p>
              <br />
              <div>
                <div className="social_media_login_option">
                  <div className="social_btn">
                    <button id="google">
                      <FcGoogle style={IconCardStyle} />
                      <span>Continue with Google</span>
                    </button>
                  </div>
                  <div className="social_btn">
                    <button id="google">
                      <BsTwitter style={IconCardStyle} />
                      <span>Continue with Twitter</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
