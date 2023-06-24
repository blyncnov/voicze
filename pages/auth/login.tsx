import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

// Reusable Toast
import { SuceedToast, FailedToast } from "@/utils/useToasts";

// Axos Custom config
import voicze_config from "@/axios.config";

// React icons
import { FcGoogle } from "react-icons/fc";
import { BsTwitter } from "react-icons/bs";

// Utils
import { useTimer } from "@/utils/useTimer";

// Icon Style
const IconCardStyle = {
  fontSize: "1.5em",
  padding: ".1em",
  borderRadius: "3px",
};

const Login = () => {
  const router = useRouter();
  const { quick } = useTimer();

  const [err, setErr] = useState("");
  const [loadBtn, setloadBtn] = useState(false);

  // Handle Login Function
  const LoginAuthHandler = async (e: any) => {
    e.preventDefault();

    // Change loading btn
    setloadBtn(true);

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
        setloadBtn(false);

        // Set Error Message
        setErr(res.data.message);

        // Save token to LocalStorage
        localStorage.setItem("token", res.data.token);

        // Sucess Toast Alert
        SuceedToast({
          feedback: res.data.message,
        });

        // Redirect to dashboard page after 2secs
        quick(() => {
          router.push("/dashboard");
        });
        // useTimerHook Ends
      })
      .catch((err: any) => {
        setloadBtn(false);

        // Sucess Toast Alert
        FailedToast({
          feedback: err.message,
        });

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
                <button type="submit">
                  {loadBtn ? "Verifying ..." : "Sign in"}
                </button>
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
