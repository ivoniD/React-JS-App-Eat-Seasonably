import './EditProduct.css'
import { useContext, useEffect, useState } from 'react';
import { ProductsContext } from '../../../contexts/ProductsContext';
import { useParams, useNavigate, Link } from 'react-router-dom';
import * as productsService from '../../../services/productsService'; 

export const EditProduct = () => {
  const [currentProd, setCurrentProd] = useState({})
  const { editProduct } = useContext(ProductsContext)
  const {season, prodId} = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    productsService.getOne(prodId)
      .then(productData => {
        setCurrentProd(productData)
      })
  }, [])

  const onSubmit = (e) => {
    e.preventDefault();

    const productData = Object.fromEntries(new FormData(e.target))
  


    productsService.edit(prodId, productData)
    .then(result => {
      editProduct(prodId, result)
    })
  }

 

    return (
        <>
        <div className="home-cont">
          <div className='av'>
            <h2 className="sec-title">Edit Product</h2>
            <form
              className="create-form-fact"
              method="post"
              onSubmit={onSubmit}
            >
            
                <div className='div-cr-fact'>
                <div className="name-div">
                  <label htmlFor="name">
                    Product name*
                  </label>
                  <input
                    type="text"
                    className="form-input"
                    name="name"
                    defaultValue={currentProd.name}
                    // defaultValue={}
                  />
                </div>
              </div>
              <div className="div-cr-fact">
                  <label htmlFor="product" className="label-season">
                    Season*
                  </label>
                  <select className="custom-select" name="season" >             
              <option value={`${currentProd.season}`}  selected  >{currentProd.season}</option>
                  </select>
                </div>

              <div className='div-cr-fact'>
                <div className="name-div">
                  <label htmlFor="name">
                    Product origin*
                  </label>
                  <input
                    type="text"
                    className="form-input"
                    name="description"
                    defaultValue={currentProd.description}
                    // defaultValue={}
                  />
                </div>
              </div>
             
              
    
              <div className='create-prod-div'>
                <p className='error-message' style={{ color: 'red', 'fontSize': '15px', fontWeight: 'bold' }}>All fields are required!</p>
                <div >
                  <button
                    type="submit"
                    className='sbm-btn'>SAVE</button>
                </div>
                <div className="product-close-actions">
            <Link to={`/`} className="product-close-button">Close</Link>
          </div>
              </div>
            </form>
    
          </div>
        </div>
      </>
    
    );
};