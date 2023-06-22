import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

// Axos Custom config
import voicze_config from "@/axios.config";

// React icons
import { FcGoogle } from "react-icons/fc";
import { BsTwitter } from "react-icons/bs";

// Icon Style
const IconCardStyle = {
  fontSize: "1.5em",
  padding: ".1em",
  borderRadius: "3px",
};

const Login = () => {
  const router = useRouter();
  const [err, setErr] = useState("");

  // Handle Login Function
  const LoginAuthHandler = async (e: any) => {
    e.preventDefault();

    // Input Values
    const email = e.target.email.value;
    const password = e.target.password.value;

    // If Empty Inputs
    if (!email || !password) {
      return;
    }

    // "auth/login" API
    voicze_config
      .post("auth/login", {
        email,
        password,
      })
      .then((res: any) => {
        console.log(res.data.message);
        console.log(res.data);

        // Set Error Message
        setErr(res.data.message);

        // If Authentication Failed,  Redirect to login page after 2secs
        if (res.data.status === 400 && res.data.response.statusCode === 400) {
          return router.push("/auth/login");
        }

        // Save token to LocalStorage
        localStorage.setItem("token", res.data.token);

        // Redirect to dashboard page after 2secs
        router.push("/dashboard");
      })
      .catch((err: any) => {
        console.log(err);

        // Redirect to login page after 2secs
        router.push("/auth/login");
      });
  };

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
              <h1>Sign in to Voicze</h1>
              <p>
                New to Voicze?{" "}
                <span>
                  <Link href="/auth/register">Register here!</Link>
                </span>
              </p>
            </div>
            <br />
            {err && (
              <div className="auth_error_logs">
                <p> {err} </p>
              </div>
            )}
            <br />
            <div>
              <form
                className="auth_form"
                autoComplete="false"
                method="POST"
                onSubmit={LoginAuthHandler}
              >
                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                    onChange={(e) => e.target.value}
                    required
                  />
                </div>
                <div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    onChange={(e) => e.target.value}
                    minLength={5}
                    required
                  />
                </div>
                <div className="auth_options">
                  <Link href="/auth/reset">Forgot your password?</Link>
                </div>
                <button type="submit">Sign in</button>
                <li style={{ fontSize: "15px" }}>
                  By continuing, you agree{" "}
                  <Link style={{ color: "#251851" }} href="/">
                    Voicze
                  </Link>{" "}
                  <span>Terms of Service</span> and <span>Privacy Policy.</span>
                </li>
              </form>
              <br />
              <br />
              <p style={{ textAlign: "center", fontWeight: "bold" }}>
                Or sign in with your social account
              </p>
              <br />
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
  );
};

export default Login;
