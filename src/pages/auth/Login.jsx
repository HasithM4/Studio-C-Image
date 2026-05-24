import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../assets/firebase/config";
import { useNavigate } from "react-router-dom";

import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);

      alert("Login Successful");

      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="login-container">

      {/* LEFT SIDE */}

      <div className="login-left">

        <img
          src="/logo.png"
          alt="Studio C Image"
          className="studio-logo"
        />

        <h1 className="brand-title">
          Studio C Image
        </h1>

        <p className="brand-subtitle">
          Nilantha Dissanayake Photography
        </p>

      </div>

      {/* RIGHT SIDE */}

      <div className="login-right">

        <div className="login-card">

          <h1 className="login-title">
            Welcome Back
          </h1>

          <p className="login-subtitle">
            Sign in to continue
          </p>

          <form onSubmit={handleLogin}>

            <div className="input-group">
              <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input-group">
              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="login-btn">
              Login
            </button>

          </form>

          <p className="footer-text">
            Studio Management System © 2025
          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;