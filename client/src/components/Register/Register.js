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
    <>
     <div className='home-cont'>
    <div className="cont-reg">
      <form className='reg-form' onSubmit = {onSubmit}>
        <h2>Register</h2>
        <label>
          <span>Name</span>
          <input type="text" name="name" />
        </label>
        <label>
          <span>Email</span>
          <input type="email" name="email" />
        </label>
        <label>
          <span>Password</span>
          <input type="password" name="password" />
        </label>
        <label>
          <span>Repeat Password</span>
          <input type="password" name="repeat-passowrd"/>
        </label>
        {errorMessage !== '' && <label style={{ color: "red", 'font-size': '1rem', 'font-style': 'italic' }}>{errorMessage}</label>}
        

        <button type="submit" className="submit">
          Sign Up
        </button>
        <div className='no-account'>
      <h3>If you already has an account? </h3>
      <Link className='go-to-login' to="/login">LOGIN HERE</Link>
      </div>
        </form>
      </div>
      </div>
      </>
  )
}