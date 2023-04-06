import { Link, useNavigate } from "react-router-dom"
import './ProductDetails.css'
import { useParams } from "react-router-dom"
import { useContext, useEffect, useState } from 'react';
import { ProductsContext } from "../../../contexts/ProductsContext";
import { AuthContext } from "../../../contexts/AuthContext";
import { getOne, del } from "../../../services/productsService";

export const ProductDetails = () => {
  const [ currentProd, setCurrentProd] = useState({})  
  const {prodId, season} = useParams()
  const {deleteProduct, seasonProducts} = useContext(ProductsContext);
  const {user} = useContext(AuthContext);
const navigate = useNavigate()
useEffect(() => {
    getOne(prodId)
    .then(result => {
        setCurrentProd(result)
    })
}, [])

    const productDeletehandler = () => {
        const deleteIt = window.confirm('Click YES if you want to delete this product!')
        if(deleteIt){
            del(prodId)
                .then(() => {
                    deleteProduct(prodId, season)
                })
        }
    }   
    

//   const product = seasonProducts.filter(x => x._id === prodId)

 console.log(user._id);
 console.log(currentProd._ownerId);

  return (
    <>


        <div className="info-section">
            <div className="game-header">
                <img className="game-img" alt="product img" src={currentProd.imageUrl} />
                <h2 className="name-product">{currentProd.name}</h2>
           {/* <span className="levels">MaxLevel: {}</span> */}
                {/* <p className="type">{product[0].season}</p> */}
                <h2 className="name-season">{currentProd.season}</h2>
            {/* <p className="type"></p> */}
            </div>
            <div className="details-comments">
            <h2 className="health">Health Benefits</h2>
            <p className="text">
            {currentProd.description}
            </p>
            </div>
     
            {/* <div className="details-comments">
                <h2>Comments:</h2>
                <ul>
                    {/* {game.comments?.map(x => 
                        <li className="comment">
                            <p>{x}</p>
                        </li>
                    )} */}
                {/* </ul> */}

                {/* {!game.comments &&
                    <p className="no-comment">No comments.</p>
                } */}
            {/* </div> */} 
{(user.name && user._id === currentProd._ownerId) &&
    <div className="buttons">
                <Link to={`/catalog/${season}/${currentProd._id}/edit`}  className="button">
                    Edit
                </Link>
                <button onClick={productDeletehandler} className="button">
                    Delete
                </button>
            </div>
            }
            
        </div>
    </>
       
        )
}