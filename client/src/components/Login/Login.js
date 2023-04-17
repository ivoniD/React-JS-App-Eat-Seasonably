import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { login } from '../../services/authService';
import { AuthContext } from '../../contexts/AuthContext';
import './Login.css'

export const Login = () => {
  const [error, setError] = useState(null)
  const { userLogin } = useContext(AuthContext)
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = Object.fromEntries(new FormData(e.target));

    login(email, password)
      .then(authData => {
        // console.log(`authdata status ${}`);
        if (authData.name) {
          userLogin(authData)
          navigate('/')
          setError(null)
        } else {
          setError(authData.message)
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
        <input type="email" name="email" />
      </label>
      <label>
        <span className="login-text">Password</span>
        <input type="password" name="password" />
      </label>
      {error !== null  && <span style={{ color: 'red', 'font-size': '20px' }}>{error}</span>}
      <button type="submit" className="submit" >
        Sign In
      </button>
      <div className='no-account'>
        <h3>Don't have an account? </h3>
        <Link className='go-to-register' to="/register">REGISTER HERE</Link>
      </div>
    </form>
  </div>
</div>
  )
  }