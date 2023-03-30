import React, { useState } from "react";
import axios from "axios";
const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const authObject = {
      "Project-ID": "4748d962-fa86-4603-aee8-6832cc4ab50c",
      "User-Name": userName,
      "User-Secret": password,
    };
    try {
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });
      localStorage.setItem("userName", userName);
      localStorage.setItem("password", password);
      window.location.reload();
      setUserName("");
      setPassword("");
      setError("");
    } catch (error) {
      setError("Oops, incorrect credentials.");
    }
  };
  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="input"
            required
            placeholder="Username"
          />
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            required
            placeholder="Password"
          />
          <div align="center">
            <button type="submit" className="button">
              <span>Start chatting</span>
            </button>
          </div>
          <h1 className="error">{error}</h1>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
