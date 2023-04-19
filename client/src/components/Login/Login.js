import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { login } from '../../services/authService';
import { AuthContext } from '../../contexts/AuthContext';
import  './Login.css'

export const Login = () => {
  const { userLogin } = useContext(AuthContext)
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState({
    email: null,
    password: null,
    server: null
  })


  const changeHandler = (e) => {
    setValues(state => ({
      ...state,
      [e.target.name]: e.target.value
    }));
    setError({ server: "" })
		validateInput(e)
  };

  const validateInput = (e) => {
    let errorMsg = '';
    const scripRegex = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (e.target.name === "email") {
      if (e.target.value.length < 3) {
        errorMsg = 'Email must be at least 3 characters'
      } else if (e.target.value.length > 25) {
        errorMsg = 'Email must be shorter that 25 characters.'
      } else if (!emailRegex.test(e.target.value)) {
        errorMsg = 'Email address must be valid.'
      } else if (scripRegex.test(e.target.value)) {
        errorMsg = 'Invalid input'
      } else {
        errorMsg = null
      }
      setError(state => ({
        ...state,
        email: errorMsg
      }))
    }
  }
  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = Object.fromEntries(new FormData(e.target));

    login(email, password)
      .then(authData => {
        if (!authData.message) {
          userLogin(authData)
          navigate('/')
        }else {
          setError(state => ({
            ...state,
            server: "Email or password don't match."
          }))
        }
      })
  };

  return (
    <div className='home-cont'>
      <div className="cont-login">
        <form className="login-form" onSubmit={onSubmit}>
          <h2 className="login">Login</h2>
          <label>
            <span className="login-text">Email</span>
            <input type="email" name="email" onBlur={validateInput} onChange={changeHandler} value={values.email} />
          </label>

          {error.email && <span style={{ color: 'red', 'font-size': '20px' }}>{error.email}</span>}
          <label>
            <span className="login-text">Password</span>
            <input type="password" name="password" onBlur={validateInput} onChange={changeHandler} value={values.password} />
          </label>

          {error.password && <span style={{ color: 'red', 'font-size': '20px' }}>{error.password}</span>}
          <button type="submit" className="submit" >
            Sign In
          </button>
          {error.server && <span style={{ color: 'red', 'font-size': '20px' }}>{error.server}</span>}
          <div className='no-account'>
            <h3>Don't have an account? </h3>
            <Link className='go-to-register' to="/register">REGISTER HERE</Link>
          </div>
        </form>
      </div>
    </div>
  )
}