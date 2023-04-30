import React from 'react';
import styles from './FindPassword.module.css';

const FindPassword = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h1 className={styles.title}>Reset Password</h1>
        <p className={styles.subtitle}>Please enter your email address to reset your password.</p>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input type="email" id="email" name="email" className={styles.input} placeholder="Enter your email address" required />
        </div>
        <button type="submit" className={styles.button}>Reset Password</button>
      </form>
    </div>
  );
}

export default FindPassword;
