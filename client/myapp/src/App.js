import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useForm} from 'react-hook-form'


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
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="nickname">Nickname</label>
        <input
          id="nickname"
          name="nickname"
          {...register('nickname', {
            required: 'nickname required',
            maxLength: {
              value: 10,
              message: 'wrong nickname less than 10'
            }
          })}
        /><br />
        {errors.nickname && <span>{errors.nickname.message}</span>}<br />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          {...register('email', {
            required: 'email required',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'wrong form email'
            }
          })}
        /><br />
        {errors.email && <span>{errors.email.message}</span>}<br />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          {...register('password', {
            required: 'password required',
            minLength: {
              value: 8,
              message: 'wrong form password more than 8'
            }
          })}
        /><br />
        {errors.password && <span>{errors.password.message}</span>}<br />

        <button type="button" onClick={handleSubmit(onSubmitHandler)}>Login</button>
      </form>
    </div>
  );
}

export default App;