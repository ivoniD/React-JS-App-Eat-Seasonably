import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import './Header.css'
import { Routes, Route, Link } from 'react-router-dom'

export const Header = () => {
  const { user } = useContext(AuthContext)
  // console.log(`user: ${user.accessToken}`);


  return (
    <header className="header">
    <div className="header__logo">
      <Link to="/">Be Healthy</Link>
    </div>
    <nav className="header__nav">
      <ul>
        <li><Link to="/catalog">Eat Seasonally</Link></li>
        {Object.keys(user).length === 0 ? (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </>
        ) : (
          <>
            <li><Link to="/create">Add Seasonal Product</Link></li>
            <li><Link to="/create/fact">Create New Fact</Link></li>
            <li><Link to="/profil">Profile</Link></li>
            <li><Link to="/logout">Logout</Link></li>
          </>
        )}
      </ul>
    </nav>
  </header>
  )
}