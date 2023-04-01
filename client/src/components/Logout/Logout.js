import { logout } from "../../services/authService"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"

export const Logout = () => {
  const navigate = useNavigate()
  const {user} = useContext(AuthContext)
  // console.log(`accessToken: ${user.accessToken}`);

  useEffect(() => {
    logout(user.accessToken)
      .then(() => {
        navigate('/')
      })
      .catch((err) => {
        console.log(err)
        navigate('/')
      })
  }, [])


  return null
}