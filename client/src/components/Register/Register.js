import './Register.css'

//import HomeCSS from "./Home.module.css";
export const Register = () => {
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
        <h2>Create your Account</h2>
        <label>
          <span>Name</span>
          <input type="text" />
        </label>
        <label>
          <span>Email</span>
          <input type="email" />
        </label>
        <label>
          <span>Password</span>
          <input type="password" />
        </label>
        <button type="button" className="submit">
          Sign Up
        </button>
      </div>
      </div>
      </>
  )
}