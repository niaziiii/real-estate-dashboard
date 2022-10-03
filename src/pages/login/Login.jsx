import React, { useContext } from 'react'
import './login.scss'
import { Formik } from 'formik';
import * as yup from "yup";
import { AppContexts } from '../../contexts/AppContext';
import { useNavigate } from 'react-router-dom';

const validateUser = {
  email: yup.string()
    .required('Email is required'),
  password: yup.string()
    .required('password is required')
    .min(6),
}


const Login = () => {
  const navigate = useNavigate()
  const { setIsLoggin, setUser } = useContext(AppContexts)

  const formik = Formik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: yup.object(validateUser),
    onSubmit: (value) => {
      const name = value.email.split('@')[0].slice(0, 1).toUpperCase() + value.email.split('@')[0].slice(1, value.email.length)
      setIsLoggin(true)
      setUser({ name })
      navigate('/')
    }
  })

  const formData = formik.props.value;
  return (
    <div className="login-form">
      <form onSubmit={(e) => {
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
        <p>{formData.touched.email && formData.errors.email ? formData.errors.email : null}</p>

        
        <label htmlFor="password">Enter your password</label>
        <input
          type='password'
          id='password'
          onChange={formData.handleChange}
          onBlur={formData.handleBlur}
          value={formData.values.password}
        />
        <p>{formData.touched.password && formData.errors.password ? formData.errors.password : null}</p>
        <input type="submit" />
      </form>
    </div>
  )
}

export default Login
