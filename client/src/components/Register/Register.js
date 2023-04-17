import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
import { register } from '../../services/authService';
import { AuthContext } from '../../contexts/AuthContext';




export const Register = () => {
  const { userLogin } = useContext(AuthContext)
  const navigate = useNavigate();
  const [error, setError] = useState({
    name: null,
    email: null,
    password: null
  })

  const validateName = (e) => {
    const name = e.target.value;
    let errorMsg = '';
    if (name.length < 3) {
      errorMsg = 'Name must be more that 3 characters.'
    }
    if (name.length > 25) {
      errorMsg = 'Name must be shorter that 25 characters.'
    }
    setError(state => ({
      ...state,
      name: errorMsg
    }))
  }
  const validateEmail = (e) => {
    const email = e.target.value;
    let errorMsg = '';
    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!emailRegex.test(email)){
      errorMsg = 'Email address must be valid.'
    }
    setError(state => ({
      ...state,
      email: errorMsg
    }))
  }


  const onSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const name = formData.get('name')
    const email = formData.get('email')
    const password = formData.get('password')
    const rePass = formData.get('repeat-password')

    if(password !== rePass){
      setError(state => ({
        ...state,
        password: "Passwords don't match"
      }))
    }else{
      setError(state => ({
        ...state,
        password: null
      }))
      register(name, email, password)
      .then(authData => {
        userLogin(authData)
        navigate('/')
      })
    }
  
    
    
  }
  return(
    <div className='home-cont'>
    <div className="cont-register">
      <form className="register-form" onSubmit={onSubmit}>
        <h2 className="register">Register</h2>
        <label>
          <span className="register-text">Name</span>
          <input type="text" name="name"  onBlur={validateName}/>
        </label>
        {error.name && <span style={{ color: 'red', 'font-size': '20px' }}>{error.name}</span>}
        <label>
          <span className="register-text">Email</span>
          <input type="email" name="email" onBlur={validateEmail}/>
          
        </label>
        {error.email && <span style={{ color: 'red', 'font-size': '20px' }}>{error.email}</span>}
        <label>
          <span className="register-text">Password</span>
          <input type="password" name="password" />
        </label>
        <label>
          <span className="register-text">Repeat Password</span>
          <input type="password" name="repeat-password" />
        </label>
        {error.password && <span style={{ color: 'red', 'font-size': '20px' }}>{error.password}</span>}
        <button type="submit" className="submit">
          Sign Up
        </button>
        <div className='have-account'>
          <h3>Already have an account? </h3>
          <Link className='go-to-login' to="/login">LOG IN HERE</Link>
        </div>
      </form>
    </div>
  </div>
  )
}