import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import './Header.css'
import { Routes, Route, Link } from 'react-router-dom'

export const Header = () => {
  const {user} = useContext(AuthContext)
  // console.log(`user: ${user.accessToken}`);
  return(
    <header className ="headerEl">
    <section id="stuck_container"className ="headerEl-section ">
    {/* <h1>
    </h1 > */}
     {/* <div className="main-title">Eat Seasonally</div> */}
    

<div className='title-box'><Link className='title' to="/">Be Helalthy </Link></div>
                    

      <div className="container">
     
        <div className="row">
          <div className="grid_12">
          
            <div className="navigation">
              <nav>
             
                <ul className="sf-menu">
                  <li className="nav-btns">
                    <Link className='nav-btns' to="/">Home</Link>
                  </li>
                  <li className='nav-btns'>
                    <Link className='nav' to="/catalog">Eat Seasonally</Link>
                  </li>
                  {/* <li className='nav-btns'>
                    <Link className='nav' to="/facts">Did you know?</Link>
                  </li> */}
                  
                  {/* <li>
                    <Link to="/facts">Did you know</Link>
                  </li> */}
                  {/* <li>
                    <Link to="/edit">Edit</Link>
                  </li> */}

                  
                  {Object.keys(user).length === 0
                  ? <>
                      <li className='nav-btns'><Link className='nav-btns' to="/login">Login</Link></li>
                      <li className='nav-btns'><Link className='nav-btns' to="/register">Register</Link></li>
                    </>
                  : <>
                      <li className='nav-btns'><Link className='nav-btns' to="/create">Add seasonall product</Link></li>
                      <li className='nav-btns'><Link className='nav-btns' to="/fact/create">Create new fact</Link></li> 
                      <li className='nav-btns'><Link className='nav-btns' to="/profil">Profile</Link></li>
                      <li className='nav-btns'><Link className='nav-btns' to="/logout">Logout</Link></li>
                    </> }
                </ul>
              </nav>
              <div className="clear" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </header>
  )
}