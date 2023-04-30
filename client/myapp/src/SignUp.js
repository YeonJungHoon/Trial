import React from "react";
import styles from "./SignUp.module.css";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className={styles.signup_container}>
      <form className={styles.signup_form}>
        <h2 className={styles.signup_title}>Sign Up</h2>
        <div className={styles.form_group}>
          <label htmlFor="username" className={styles.form_label}>
            Username
          </label>
          <input
            type="text"
            id="username"
            className={styles.form_input}
            placeholder="Enter your username"
          />
        </div>
        <div className={styles.form_group}>
          <label htmlFor="email" className={styles.form_label}>
            Email
          </label>
          <input
            type="email"
            id="email"
            className={styles.form_input}
            placeholder="Enter your email"
          />
        </div>
        <div className={styles.form_group}>
          <label htmlFor="password" className={styles.form_label}>
            Password
          </label>
          <input
            type="password"
            id="password"
            className={styles.form_input}
            placeholder="Enter your password"
          />
        </div>
        <div className={styles.form_group}>
          <label htmlFor="confirm-password" className={styles.form_label}>
            Confirm Password
          </label>
          <input
            type="password"
            id="confirm-password"
            className={styles.form_input}
            placeholder="Confirm your password"
          />
        </div>
        <button type="submit" className={styles.submit_button}>
          Sign Up
        </button>
        <p className={styles.login_link}>
          Already have an account? <Link to="/login">Log In</Link>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
