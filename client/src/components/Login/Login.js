import './Login.css'

//import HomeCSS from "./Home.module.css";
export const Login = () => {
  const onSubmit = (e) => {
    e.preventDefault();

    const {email, password} = Object.fromEntries(new FormData(e.target));
    console.log(email);
    console.log(password);
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
          <span className="m--up">Sign Up</span>
        </div>
      </div>
    </div>
  </div>
      </>
  )
}