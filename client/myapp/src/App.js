import React from 'react';
import axios from 'axios';
import {useForm} from 'react-hook-form';
import styles from "./App.module.css";


function App() {
  const {register, handleSubmit, formState: {errors}} = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
  };

  const onSubmitHandler = async (formData) => {
    try {  
        console.log(formData)
        await axios.post('http://localhost:3306/login', formData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div >
      <form className={styles.login_border} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.nickname}>
        <label className={styles.nickname_label} htmlFor="nickname">Nickname</label>
        <input
          className={styles.nickname_input}
          id="nickname"
          name="nickname"
          {...register('nickname', {
            required: 'nickname required',
            maxLength: {
              value: 10,
              message: 'wrong nickname less than 10'
            }
          })}
        /></div>
        {errors.nickname && <span className={styles.error}>{errors.nickname.message}</span>}<br />
        <div className={styles.email}>
        <label className={styles.email_label} htmlFor="email">Email</label>
        <input
          className={styles.email_input}
          id="email"
          name="email"
          {...register('email', {
            required: 'email required',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'wrong form email'
            }
          })}
        /></div>
        {errors.email && <span className={styles.error}>{errors.email.message}</span>}<br />
        <div className={styles.password}>
        <label className={styles.password_label} htmlFor="password">Password</label>
        <input
          className={styles.password_input}
          id="password"
          name="password"
          {...register('password', {
            required: 'password required',
            minLength: {
              value: 8,
              message: 'wrong form password more than 8'
            }
          })}
        /></div>
        {errors.password && <span className={styles.error}>{errors.password.message}</span>}<br />

        <button className={styles.button} type="button" onClick={handleSubmit(onSubmitHandler)}>Login</button>
      </form>
    </div>
  );
}

export default App;