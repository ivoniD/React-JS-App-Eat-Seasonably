import './Login.css'
import { Link } from 'react-router-dom';
import { login } from '../../services/authService';
import {useNavigate} from 'react-router-dom'
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

export const Login = () => {
  const[errorMessage, setErrorMessage] = useState('')
  const {userLogin} = useContext(AuthContext)
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
let errorMsg = ''
    const {email, password} = Object.fromEntries(new FormData(e.target));

    login(email, password)
      .then(authData => {
        // console.log(`authdata status ${}`);
        if(authData.name){
          userLogin(authData)
          setErrorMessage('')
          navigate('/')
        }else{
          setErrorMessage(authData.message)
        }
       
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
      <h2 clasName="login-text">Login</h2>
      <label>
        <span clasName="login-text">Email</span>
        <input type="email" name="email" />
      </label>
      <label>
        <span clasName="login-text">Password</span>
        <input type="password" name="password" />
      </label>
      {errorMessage !== '' &&   <label className="error-msg" style={{ color: "red", 'font-size': '1.2rem', 'font-style': 'bold' }}>{errorMessage}</label>}
    
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