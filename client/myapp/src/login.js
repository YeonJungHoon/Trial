import React from "react";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h2 className={styles.heading}>로그인</h2>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="username">
            아이디
          </label>
          <input className={styles.input} type="text" id="username" />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="password">
            비밀번호
          </label>
          <input className={styles.input} type="password" id="password" />
        </div>
        <button className={styles.button}>로그인</button>
        <div className={styles.linkGroup}>
          <a href="#" className={styles.link}>
            아이디 찾기
          </a>
          <a href="#" className={styles.link}>
            비밀번호 찾기
          </a>
          <a href="#" className={styles.link}>
            회원가입
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
