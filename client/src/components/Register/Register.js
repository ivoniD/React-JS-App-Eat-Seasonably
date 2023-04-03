import { useContext } from 'react';
import './Register.css'
import { register } from '../../services/authService';
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';



export const Register = () => {
  const { userLogin } = useContext(AuthContext)
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const name = formData.get('name')
    const email = formData.get('email')
    const password = formData.get('password')
    const rePass = formData.get('repeat-password')

    // console.log(name);
    if(password !== password){
      return
      //error - 404?
    }

    register(name, email, password)
      .then(authData => {
        userLogin(authData)
        navigate('/')
      })


  }
  return(
    <>
    <div className="cont">

    <div className="sub-cont">
      <div className="img">
        <div className="img__text m--up">
          <h3 className="message">If you already has an account, just sign in</h3>
          <h3></h3>
        </div>
       
        <div className="img__btn">
          <span className="m--up">Sign In</span>
        </div>
      </div>
    </div>

      <div className="form sign-up">
      <form onSubmit = {onSubmit}>
        <h2>Create your Account</h2>
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
        {/* <label>
          <span>Profile Picture</span>
          <input type="password" />
        </label> */}
        <button type="submit" className="submit">
          Sign Up
        </button>
        </form>
      </div>
      </div>
      </>
  )
}