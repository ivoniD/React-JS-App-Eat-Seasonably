import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import './Header.css'
import { Routes, Route, Link, NavLink } from 'react-router-dom'

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
          ? {backgroundColor: 'lightgreen'}
          : undefined
        }
        }>Eat Seasonally</NavLink></li>
        {Object.keys(user).length === 0 ? (
          <>
            <li><NavLink to="/login"
             style={(navLinkProps) => {
              return navLinkProps.isActive
              ? {backgroundColor: 'lightgreen'}
              : undefined
            }}
            >Login</NavLink></li>
            <li><NavLink to="/register"
               style={(navLinkProps) => {
                return navLinkProps.isActive
                ? {backgroundColor: 'lightgreen'}
                : undefined
              }}
              >Register</NavLink></li>
          </>
        ) : (
          <>
            <li><NavLink to="/create/product"
             style={(navLinkProps) => {
              return navLinkProps.isActive
              ? {backgroundColor: 'lightgreen'}
              : undefined
            }}
            >Add Seasonal Product</NavLink></li>
            <li><NavLink to="/create/fact"
             style={(navLinkProps) => {
              return navLinkProps.isActive
              ? {backgroundColor: 'lightgreen'}
              : undefined
            }}
            // >Create New Fact</NavLink></li>
            // <li><NavLink to="/profil"
            //  style={(navLinkProps) => {
            //   return navLinkProps.isActive
            //   ? {backgroundColor: 'lightgreen'}
            //   : undefined
            // }}
            >Profile</NavLink></li>
            <li><NavLink to="/logout">Logout</NavLink></li>
          </>
        )}
      </ul>
    </nav>
  </header>
  )
}