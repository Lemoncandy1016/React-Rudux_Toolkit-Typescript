import React from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addUserinfo } from "../features/loginSlice";
const Login = () => {
  const dispatch = useDispatch();
  const nameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const loginUserinfo = () => {
    const name = nameRef.current!.value.trim();
    const password = passwordRef.current!.value.trim();
    const userinfo = { name, password };
    dispatch(addUserinfo(userinfo));
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Login Form</h2>
      <form
        style={{
          display: "inline-block",
          textAlign: "left",
          maxWidth: "300px",
        }}
        // onSubmit={loginUserinfo}
      >
        <label htmlFor="username">Username:</label>
        <input
          ref={nameRef}
          type="text"
          id="username"
          name="username"
          style={{
            marginBottom: "10px",
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            boxSizing: "border-box",
            width: "100%",
          }}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          ref={passwordRef}
          type="password"
          id="password"
          name="password"
          style={{
            marginBottom: "10px",
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            boxSizing: "border-box",
            width: "100%",
          }}
        />
        <br />
        <input
          type="button"
          value="Login"
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            width: "100%",
          }}
          onClick={loginUserinfo}
        />
      </form>
    </div>
  );
};

export default Login;
