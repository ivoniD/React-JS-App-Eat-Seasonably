import './Login.css'

//import HomeCSS from "./Home.module.css";
export const Login = () => {
  return(
    <>
  <div className="cont">
    <div className="form sign-in">
      <h2>Welcome</h2>
      <label>
        <span>Email</span>
        <input type="email" />
      </label>
      <label>
        <span>Password</span>
        <input type="password" />
      </label>
      <p className="forgot-pass">dont match</p>
      <button type="button" className="submit">
        Sign In
      </button>
    </div>
    <div className="sub-cont">
      <div className="img">
        <div className="img__text m--up">
          <h3 className='message'>Don't have an account? Please Sign up!</h3>
          <h3></h3>
        </div>
        <div className="img__btn">
          <span className="m--up">Sign Up</span>
        </div>
      </div>
    </div>
  </div>
      </>
  )
}