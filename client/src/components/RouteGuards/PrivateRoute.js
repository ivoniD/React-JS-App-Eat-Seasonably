import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import { Navigate } from "react-router-dom"

export const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext)

  if (!user.email) {
    return (
      <Navigate to="/login" replace /> 
    )
  }

  return (
    <>
      {children}
    </>
  )
}