import React, { useState } from "react";
import "../CSS/signup.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
    setUserName(event.target.value);
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8081/register", values)
      .then((res) => {
        console.log("Register Successfully");
        console.log(res.data);
        navigate("/userhome", { state: { username: values.name } });
      })
      .catch((err) => console.log(err));
  };

  return (
    <section className="sign-up">
      <div className="container">
        <div className="row">
          <div className="col">
            <h3 className="heading">Sign Up</h3>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Username:</label>
              <input
                type="text"
                name="name"
                id="name"
                className="name"
                value={values.name}
                onChange={handleChange}
              />
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                name="email"
                id="email"
                className="email"
                value={values.email}
                onChange={handleChange}
              />
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                id="password"
                className="password"
                value={values.password}
                onChange={handleChange}
              />
              <div className="account">
                <p>
                  Have an account?{" "}
                  <Link to="/signin" className="link-page">
                    Sign In
                  </Link>
                </p>
              </div>
              <div className="btn-box">
                <button type="submit" className="sign-up-btn">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
