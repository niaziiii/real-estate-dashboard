import React from 'react'
import './login.scss'
import { Formik } from 'formik';


const Login = () => {
  const formik = Formik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: (value) => {
      console.log(value);
    }
  })

  const formData = formik.props.value;
  return (
    <div className="login-form">
      <form onSubmit={(e)=>{
        e.preventDefault();
        formData.handleSubmit();
      }}>
        <h1>Login</h1>
        <label htmlFor="email">Enter you email address</label>
        <input
          type='email'
          id='email'
          onChange={formData.handleChange}
          onBlur={formData.handleBlur}
          value={formData.values.email}
        />
        <label htmlFor="password">Enter your password</label>
        <input
          type='password'
          id='password'
          onChange={formData.handleChange}
          onBlur={formData.handleBlur}
          value={formData.values.password}

        />
        <input type="submit" />
      </form>
    </div>
  )
}

export default Login
