import './Login.css'
import { Link } from 'react-router-dom';
import { login } from '../../services/authService';
import {useNavigate} from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

export const Login = () => {
  const {userLogin} = useContext(AuthContext)
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();

    const {email, password} = Object.fromEntries(new FormData(e.target));
    // console.log(email);
    // console.log(password);
    login(email, password)
      .then(authData => {
        console.log(authData);
        userLogin(authData)
        navigate('/')
      })
      .catch(() => {
        navigate('/404') //TODO 
      })
  };

  return(
    <>
    <div className='home-cont'>
  <div className="cont-login">
    <form className="login-form" onSubmit={onSubmit}>
      <h2>Login</h2>
      <label>
        <span>Email</span>
        <input type="email" name="email" />
      </label>
      <label>
        <span>Password</span>
        <input type="password" name="password" />
      </label>
      <label style={{ color: "red", 'font-size': '1rem', 'font-style': 'italic' }}>All fields are required!</label>
      <button type="submit" className="submit">
        Sign In
      </button>
      <div className='no-account'>
      <h3 >Don't have an account? </h3>
      <Link className='go-to-register' to="/register">REGISTER HERE</Link>
      </div>

    </form>

  </div>
  </div>
      </>
  )
}