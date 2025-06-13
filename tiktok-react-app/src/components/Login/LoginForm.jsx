import React, { useState } from "react";
import Button from "../Button/index";
import styles from "./LoginForm.module.scss";

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Đăng nhập demo: chỉ cần nhập bất kỳ username/password
    if (username && password) {
      localStorage.setItem("isLoggedIn", "true");
      onLogin();
    } else {
      setError("Vui lòng nhập đầy đủ thông tin!");
    }
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <h2 className={styles.title}>Đăng nhập</h2>
        {error && <div className={styles.error}>{error}</div>}
        <input
          className={styles.input}
          type="text"
          placeholder="Tên đăng nhập"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className={styles.input}
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button primary type="submit" className={styles.submitButton}>
          Đăng nhập
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
