import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../CSS/signin.css";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [errShowState, setErrState] = useState(false);

  const handleSignIn = async () => {
    try {
      const response = await axios.post("http://localhost:8081/login", {
        username,
        password,
      });
      if (response.data.success) {
        console.log("Sign in successful");
        navigate("/userhome", { state: { username: username } });
      } else {
        console.log("Sign in failed: ", response.data.message);
        setErrState((prevState) => !prevState);
      }
    } catch (error) {
      console.error("Error during sign-in: ", error);
    }
  };

  return (
    <section className="sign-in">
      <div className="container">
        <div className="row">
          <div className="col">
            <h3 className="head">Sign In</h3>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              name="username"
              id="username"
              className="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              className="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="account">
              <p>
                Don't have an account?{" "}
                <Link to="/signup" className="link-page">
                  Sign Up
                </Link>
              </p>
              {errShowState && (
                <div className="err-message">
                  <p className="err-paragraph">Invalid username and password</p>
                </div>
              )}
              <div className="btn-box">
                <button onClick={handleSignIn} className="sign-in-btn">
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
