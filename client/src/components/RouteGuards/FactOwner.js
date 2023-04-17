import { useContext } from "react"
import { Navigate, useParams } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"

import { FactContext } from "../../contexts/FactContext"

export const FactOwner = ({children}) => {
  const {factId, prodId, season} = useParams()
  const { user } = useContext(AuthContext)
  const  { currentFact }  = useContext(FactContext)
  
  const fact = currentFact(factId);


  if (!fact || !fact[0] || fact[0]._ownerId !== user._id) {
    return <Navigate to={`/catalog/${season}/${prodId}/fact/${factId}`} replace />
  } 

  return(
    <>
    {children}
    </>
  )
}