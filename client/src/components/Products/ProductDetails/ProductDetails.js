import { Link, Route, Routes, useNavigate } from "react-router-dom"
import './ProductDetails.css'
import { useParams } from "react-router-dom"
import { useContext, useEffect, useState } from 'react';
import { ProductsContext } from "../../../contexts/ProductsContext";
import { FactContext } from "../../../contexts/FactContext";
import { AuthContext } from "../../../contexts/AuthContext";
import { getOne, del } from "../../../services/productsService";


export const ProductDetails = () => {
  const [currentProd, setCurrentProd] = useState({})

  const { prodId, season } = useParams()
  const { deleteProduct, seasonProducts } = useContext(ProductsContext);
  const { facts } = useContext(FactContext)
  const { user } = useContext(AuthContext);

  useEffect(() => {
    getOne(prodId)
      .then(result => {
        setCurrentProd(result)
      })

  }, [])

  let currentFacts = []
  if(facts.length){
   currentFacts = facts.filter(x => x.product === currentProd.name)
  }

  // const productDeletehandler = () => {
  //   const deleteIt = window.confirm('Do you want to delete this product!')
  //   if (deleteIt) {
  //     del(prodId)
  //       .then(() => {
  //         deleteProduct(prodId, season)
  //       })
  //   }
  // }
console.log(`currentFacts ${currentFacts.length}`);
  return (
    <div className='home-cont'>
    <div className="product-details pr-det">
      <div className="product-header">
        <h1 className="product-name title-name-pr pr-n">{currentProd.name}</h1>
        <h2 className="product-season seas-prod">Season: <em>{currentProd.season}</em></h2>
        <label htmlFor="dsc" className="dsc-label">About {currentProd.name}:</label>
        <p name='dsc' className="product-season seas-prod descr" >
             {currentProd.description}
            </p>
      </div>
      <div className="product-facts">
        <h2 className="product-facts-title ">Interesting facts about {currentProd.name}?</h2>
        <div className="product-facts-list">
        {currentFacts  && (
            currentFacts.map((x) => (
              <div className="product-fact" key={x._id}>
                <Link to={`/catalog/${season}/${currentProd._id}/fact/${x._id}`} className="product-fact-link">{x.name}</Link>
              </div>
            ))
          ) }

          {currentFacts.length === 0 &&  <div className="product-no-facts"><em>No facts yet.</em></div>}
      
        </div>
      </div>
      <div className="product-actions">
        <Link to={`/catalog/${season}/${prodId}/create`} className="create-fact-button">Create Fact HERE</Link>
        <div className="product-close-actions">
        {(user.name && user._id === currentProd._ownerId) &&
          <>
            <Link to={`/catalog/${season}/${currentProd._id}/edit`} className="bt-ed">
              Edit
            </Link>
            {/* <button onClick={productDeletehandler} className="bt-del">
              Delete
            </button> */}
            </>
             }
          <Link to={`/catalog/${season}`} className="product-close-button">Close</Link>
        </div>
      </div>
    </div>
    </div>
  )
}