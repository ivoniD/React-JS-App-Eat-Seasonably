import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import './Header.css'
import { Routes, Route, Link } from 'react-router-dom'

export const Header = () => {
  const {user} = useContext(AuthContext)
  // console.log(`user: ${user.accessToken}`);
  return(
    <header className ="headerEl">
    <section id="stuck_container"className ="headerEl">
    <h1>
     
     <div className="main-title">Eat Seasonally</div>
    
   </h1>
      <div className="container">
     
        <div className="row">
          <div className="grid_12">
          
            <div className="navigation">
              <nav>
                <ul className="sf-menu">
                  <li className="current">
                    <Link className='nav-btns' to="/">Home</Link>
                  </li>
                  <li>
                    <Link className='nav' to="/seasons">Season Products</Link>
                  </li>
                  {/* <li>
                    <Link to="/facts">Did you know</Link>
                  </li> */}
                  {/* <li>
                    <Link to="/edit">Edit</Link>
                  </li> */}
                  {Object.keys(user).length === 0
                  ? <>
                      <li><Link className='nav-btns' to="/login">Login</Link></li>
                      <li><Link className='nav-btns' to="/register">Register</Link></li>
                    </>
                  : <>
                      <li><Link className='nav-btns' to="/create">Create</Link></li>
                      <li><Link className='nav-btns' to="/profil">Profile</Link></li>
                      <li><Link className='nav-btns' to="/logout">Logout</Link></li>
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