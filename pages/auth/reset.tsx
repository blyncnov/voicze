import React from "react";
import Link from "next/link";

// React icons
import { IoIosArrowBack } from "react-icons/io";

// Icon Style
const IconCardStyle = {
  fontSize: "1.5em",
};

const Reset = () => {
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
            <div
              style={{
                display: "flex",
                gap: ".5em",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <Link href="/auth/login">
                <IoIosArrowBack style={IconCardStyle} />
              </Link>
              <Link href="/auth/login">
                <li style={{ cursor: "pointer", fontWeight: "500px" }}>Back</li>
              </Link>
            </div>
            <br />
            <div>
              <h1>Forgot your password?</h1>
              <p>
                No problem! Just enter the email address that you signed up with
                to reset it.
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
                <button type="submit">Log in</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reset;
