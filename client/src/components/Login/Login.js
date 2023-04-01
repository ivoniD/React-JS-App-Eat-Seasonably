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
  <div className="cont">
    <form className="form sign-in" onSubmit={onSubmit}>
      <h2>Welcome</h2>
      <label>
        <span>Email</span>
        <input type="email" name="email" />
      </label>
      <label>
        <span>Password</span>
        <input type="password" name="password" />
      </label>
      <p className="forgot-pass">dont match</p>
      <button type="submit" className="submit">
        Sign In
      </button>
    </form>
    <div className="sub-cont">
      <div className="img">
        <div className="img__text m--up">
          <h3 className='message'>Don't have an account? Please Sign up!</h3>
          <h3></h3>
        </div>
        <div className="img__btn">
        <Link to='/register'><span className="m--up">Sign Up</span></Link>
        </div>
      </div>
    </div>
  </div>
      </>
  )
}