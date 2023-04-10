import { Link, useNavigate } from "react-router-dom"
import './ProductDetails.css'
import { useParams } from "react-router-dom"
import { useContext, useEffect, useState } from 'react';
import { ProductsContext } from "../../../contexts/ProductsContext";
import { FactContext } from "../../../contexts/FactContext";
import { AuthContext } from "../../../contexts/AuthContext";
import { getOne, del } from "../../../services/productsService";


export const ProductDetails = () => {
  const [ currentProd, setCurrentProd] = useState({})  

  const {prodId, season} = useParams()
  const {deleteProduct, seasonProducts} = useContext(ProductsContext);
  const { facts } = useContext(FactContext)
  const {user} = useContext(AuthContext);

useEffect(() => {
    getOne(prodId)
    .then(result => {
        setCurrentProd(result)
    })

}, [])

const currentFacts = facts.filter(x => x.product === currentProd.name)  || ''
// console.log(x.product === currentProd.name); 

    const productDeletehandler = () => {
        const deleteIt = window.confirm('Do you want to delete this product!')
        if(deleteIt){
            del(prodId)
                .then(() => {
                    deleteProduct(prodId, season)
                })
        }
    }   
    

//   const product = seasonProducts.filter(x => x._id === prodId)

 console.log('--------');
 console.log(currentFacts);

  return (
    <>

<div className='home-cont'>


        <div className="info-section details-cont">
            <div className="game-header">
                <img className="game-img" alt="product img" src={currentProd.imageUrl} />
                <h2 className="name-product">{currentProd.name}</h2>
           {/* <span className="levels">MaxLevel: {}</span> */}
                {/* <p className="type">{product[0].season}</p> */}
                <h2 className="name-season">{currentProd.season}</h2>
            {/* <p className="type"></p> */}
            </div>
            <div className="details-comments">
            <h2 className="health">{currentProd.name} facts</h2>
            <div className="facts-about">
           
{currentFacts != '' ? currentFacts.map(x =><div className="fact-div"> <span className="fact-span"> <Link to={`/facts/${x._id}`} className="fact-one">{x.name}</Link></span></div>)  
                    : <div className="div-no-facts"><span className="no-facts">No facts about {currentProd.name}. Create one <Link className="create-here" to="/fact/create">HERE</Link>.</span></div>
                    }

           
            </div>
   
            </div>


<div className="buttons">
            {(user.name && user._id === currentProd._ownerId) &&
            <>
              <Link to={`/catalog/${season}/${currentProd._id}/edit`} className="button edit-btn prod-btns">
                Edit
              </Link>
              <button onClick={productDeletehandler} className="button del-btn prod-btns">
                Delete
              </button>
              </>
               }
              <Link to={`/${season}`} className="button close-btn prod-btns">
                Close
              </Link>
              
            </div>
            
        </div>
        </div>
    </>
       
        )
}