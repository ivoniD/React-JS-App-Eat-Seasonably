import { useEffect } from "react"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { logout } from "../../services/authService"
import { AuthContext } from "../../contexts/AuthContext"

export const Logout = () => {
  const navigate = useNavigate()
  const {user, userLogout} = useContext(AuthContext)
  // console.log(`accessToken: ${user.accessToken}`);

  useEffect(() => {
    logout(user.accessToken)
      .then(() => {
        userLogout()
        navigate('/')
      })
      .catch((err) => {
        console.log(err)
        navigate('/')
      })
  }, [])


  return null
}