import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import './Header.css'


export const Header = () => {
  const { user } = useContext(AuthContext)
  // console.log(`user: ${user.accessToken}`);


  return (
    <header className="header">
    <div className="header__logo">
      <NavLink to="/">Be Healthy</NavLink>
    </div>
    <nav className="header__nav">
      <ul>
        <li><NavLink to="/catalog" 
        style={(navLinkProps) => {
          return navLinkProps.isActive
          ? {backgroundColor: 'lightgreen', color: 'black'}
          : undefined
        }
        }>Eat Seasonally</NavLink></li>

        {Object.keys(user).length === 0 
        ? (
          <>
            <li><NavLink to="/login"
             style={(navLinkProps) => {
              return navLinkProps.isActive
              ? {backgroundColor: 'lightgreen', color: 'black'}
              : undefined
            }}
            >Login</NavLink></li>
            <li><NavLink to="/register"
               style={(navLinkProps) => {
                return navLinkProps.isActive
                ? {backgroundColor: 'lightgreen', color: 'black'}
                : undefined
              }}
              >Register</NavLink></li>
          </>)
        : (
          <>
            <li><NavLink to="/create/product"
             style={(navLinkProps) => {
              return navLinkProps.isActive
              ? {backgroundColor: 'lightgreen', color: 'black'}
              : undefined
            }}
            >Add Seasonal Product</NavLink></li>
            <li><NavLink to="/profil"
             style={(navLinkProps) => {
              return navLinkProps.isActive
              ? {backgroundColor: 'lightgreen', color: 'black'}
              : undefined
            }}
            >Profile</NavLink></li>
            <li><NavLink to="/logout">Logout</NavLink></li>
          </>
        )}
      </ul>
    </nav>
  </header>
  )
}