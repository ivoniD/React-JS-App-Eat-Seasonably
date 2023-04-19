import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../../services/authService';
import { AuthContext } from '../../contexts/AuthContext';
import  './Register.css'



export const Register = () => {
  const { userLogin } = useContext(AuthContext)
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
		email: "",
		password: "",
		rePass: ""
	})
  const [error, setError] = useState({
    name: null,
    email: null,
    password: null,
    server: null
  })
  const scripRegex = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
  const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


  const changeHandler = (e) => {
    let { name, value } = e.target
    setValues(state => ({
			...state,
			[name]: value
		}))
    setError({ server: null })
		validateInput(e)
  }


	const validateInput = (e) => {
		let { name, value } = e.target

    setError(state => {
      const newState = { ...state };
      switch (name) {
        case "name":
          if (!value) {
            newState[name] = "Name is required.";
          } else if (value.length < 3) {
            newState[name] = "Name must be at lest 3 characters.";
          } else if (value.length > 25) {
            newState[name] = 'Name must be shorter that 25 characters.'
          } else if(scripRegex.test(value)){
            newState[name] = 'Invalid input'
          }else {
            newState[name] = null;
          }
          break;
        case "email":
          if (!value) {
            newState[name] = "Email is required.";
          } else if(value.length < 8){
            newState[name] = 'Email must be at lest 8 characters'
          } else if (value.length > 25) {
            newState[name] = 'Email must be shorter that 25 characters.'
          }else if (emailRegex.test(value)) {
            newState[name] = "Email address must be valid.";
          } else if(scripRegex.test(value)){
            newState[name] = 'Invalid input'
          }else {
            newState[name] = null;
          }
          break;
        case "password":
          if (!value) {
            newState[name] = "Password is required.";
          } else if (value.length < 6) {
            newState[name] = "Password must be at least 6 characters long.";
          } else {
            newState[name] = null;
          }
          break;
        default:
          break;
      }
      return newState;
    });
	}


  const onSubmit = (event) => {
		event.preventDefault()
		const { name, email, password, rePass } = Object.fromEntries(new FormData(event.target))
    let errMsg = ''
    if(password === rePass){
      register(name, email, password)
      .then(result => {
        if (!result.message) {
          userLogin(result)
          navigate("/")
        } else {
          setError({ server: result.message })
        }
      }).catch(err => console.log(err))
    }else{
      errMsg = "Passwords don't match."
    }
		setError({ server: errMsg })
	}

  
  return(
    <div className='home-cont'>
    <div className="cont-register">
      <form className="register-form" onSubmit={onSubmit}>
        <h2 className="register">Register</h2>
        <label>
          <span className="register-text">Name</span>
          <input type="text" name="name" value={values.name} onChange={changeHandler}  onBlur={validateInput}/>
        </label>
        {error.name && <span style={{ color: 'red', 'font-size': '20px' }}>{error.name}</span>}
        <label>
          <span className="register-text">Email</span>
          <input type="email" name="email" value={values.email} onChange={changeHandler}  onBlur={validateInput}/>
          
        </label>
        {error.email && <span style={{ color: 'red', 'font-size': '20px' }}>{error.email}</span>}
        <label>
          <span className="register-text">Password</span>
          <input type="password" name="password" value={values.password} onChange={changeHandler}  onBlur={validateInput}/>
        </label>
        {error.password && <span style={{ color: 'red', 'font-size': '20px' }}>{error.password}</span>}
        <label>
          <span className="register-text">Repeat Password</span>
          <input type="password" name="rePass" value={values.rePass} onChange={changeHandler}  onBlur={validateInput}/>
        </label>
        <button type="submit" className="submit" >
          Sign Up
        </button>
        {error.server && <span style={{ color: 'red', 'font-size': '20px' }}>{error.server}</span>}
        <div className='have-account'>
          <h3>Already have an account? </h3>
          <Link className='go-to-login' to="/login">LOG IN HERE</Link>
        </div>
      </form>
    </div>
  </div>
  )
}