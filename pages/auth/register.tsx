import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// React icons
import { FcGoogle } from "react-icons/fc";
import { BsTwitter } from "react-icons/bs";
import voicze_config from "@/axios.config";

// Utils
import { useTimer } from "@/utils/useTimer";
import { FailedToast, SuceedToast } from "@/utils/useToasts";

// Icon Style
const IconCardStyle = {
  fontSize: "1.5em",
  padding: ".1em",
  borderRadius: "3px",
};

const Register = () => {
  const router = useRouter();
  const { quick } = useTimer();

  const [err, setErr] = useState("");
  const [loadBtn, setloadBtn] = useState(false);

  // Email from query
  const { email } = router.query;

  // Handle Login Function
  const RegisterAccountHandler = async (e: any) => {
    e.preventDefault();

    // Change loading btn
    setloadBtn(true);

    // Input Values
    const first_name = e.target.first_name.value;
    const last_name = e.target.last_name.value;
    const business_name = e.target.business_name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // If Empty Inputs
    if (!email || !password || !first_name || !last_name || !business_name) {
      return;
    }

    // "auth/login" API
    voicze_config
      .post("auth/signup", {
        first_name,
        last_name,
        business_name,
        email,
        password,
      })
      .then((res: any) => {
        setloadBtn(false);
        console.log(res.data);

        // Set Error Message
        setErr(res.data.message);

        // If Registration Failed,  Redirect to register page after 2secs again
        if (res.data.status === 400 && res.data.response.statusCode === 400) {
          setloadBtn(true);
          return router.push("/auth/register");
        }

        // Sucess Toast Alert
        SuceedToast({
          feedback: res.data.message,
        });

        // Redirect to dashboard page after 2secs
        quick(() => {
          router.push("/auth/login");
        });
      })
      .catch((err: any) => {
        setloadBtn(false);

        // Sucess Toast Alert
        FailedToast({
          feedback: err.message,
        });

        // Redirect to login page after 2secs
        router.push("/auth/register");
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
              <h1>Create an account</h1>
              <p>
                Already have an account?{" "}
                <span>
                  <Link href="/auth/login">Sign in here!</Link>
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
                onSubmit={RegisterAccountHandler}
              >
                <div>
                  <input
                    type="text"
                    name="first_name"
                    id="first_name"
                    placeholder="First Name"
                    onChange={(e) => e.target.value}
                    minLength={2}
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    placeholder="Last Name"
                    onChange={(e) => e.target.value}
                    minLength={2}
                    required
                  />
                </div>
                <div>
                  <input
                    data-type="business"
                    type="text"
                    name="business_name"
                    id="business_name"
                    placeholder="Business Name"
                    onChange={(e) => e.target.value}
                    minLength={2}
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    defaultValue={email}
                    placeholder="Email Address"
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
                  {loadBtn ? "Setting Up Account ..." : " Create account"}
                </button>
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
