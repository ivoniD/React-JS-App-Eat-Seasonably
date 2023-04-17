import { useContext } from "react"
import { Navigate, useParams } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"
import { ProductsContext } from "../../contexts/ProductsContext"

export const ProductOwner = ({children}) => {
  const {prodId, season} = useParams()
  const { user } = useContext(AuthContext)
  const { currentProduct }  = useContext(ProductsContext)
  
  const product = currentProduct(prodId);
  console.log(`prodId ${prodId}`);
  console.log(`product ${product}`);
  console.log(`user ${user._id}`);

  if (!product || !product[0] || product[0]._ownerId !== user._id) {
    return <Navigate to={`/catalog/${season}/${prodId}`} replace />
  } 

  return(
    <>
    {children}
    </>
  )
}