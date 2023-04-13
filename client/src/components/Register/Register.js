import { useContext, useState } from 'react';
import './Register.css'
import { register } from '../../services/authService';
import { AuthContext } from '../../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';



export const Register = () => {
  const [errorMessage, setErrorMessage] = useState(null)
  const { userLogin } = useContext(AuthContext)
  const navigate = useNavigate();


  const onSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const name = formData.get('name')
    const email = formData.get('email')
    const password = formData.get('password')
    const rePass = formData.get('repeat-password')

    // if(name === '' || email === '' || password === '' || rePass=== ''){
    //   setErrorMessage('All fields are required!')
    // }else(
    //   setErrorMessage(null)
    // )

    // if(password !== rePass){
    //     setErrorMessage("Passwords don't match")
    // }else{
    //   setErrorMessage(null)
    // }
    


      register(name, email, password)
      .then(authData => {
        userLogin(authData)
        setErrorMessage('')
        navigate('/')
      })
    


  }
  return(
    <div className='home-cont'>
    <div className="cont-register">
      <form className="register-form" onSubmit={onSubmit}>
        <h2 className="register">Register</h2>
        <label>
          <span className="register-text">Name</span>
          <input type="text" name="name" />
        </label>
        <label>
          <span className="register-text">Email</span>
          <input type="email" name="email" />
        </label>
        <label>
          <span className="register-text">Password</span>
          <input type="password" name="password" />
        </label>
        <label>
          <span className="register-text">Repeat Password</span>
          <input type="password" name="repeat-password" />
        </label>
        {errorMessage !== '' && <span className="error-msg">{errorMessage}</span>}
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