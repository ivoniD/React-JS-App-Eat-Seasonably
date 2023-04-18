import { useContext, useEffect, useState } from 'react';
import { ProductsContext } from '../../../contexts/ProductsContext';
import { useParams, Link } from 'react-router-dom';
import * as productsService from '../../../services/productsService'; 
import './EditProduct.css'

export const EditProduct = () => {
  const [currentProd, setCurrentProd] = useState({})
  const { editProduct } = useContext(ProductsContext)
  const { prodId} = useParams();
  const [error, setError] = useState(null)


  useEffect(() => {
    productsService.getOne(prodId)
      .then(productData => {
        setCurrentProd(productData)
      })
  }, [])

  
  const onSubmit = (e) => {
    e.preventDefault();
    
    const productData = Object.fromEntries(new FormData(e.target))
    let errMsg = null;
    const scripRegex = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;

    if(!productData.name || !productData.description){
      errMsg = 'All fields are required!'
    }else if (productData.description.length < 8) {
      errMsg = 'Description must be at lest 8 characters';
    }else if(productData.description.length > 2000){
      errMsg = 'Description must be shorter that 2000 characters.';
    }else if (productData.name.length < 3){
      errMsg = 'Name must be at lest 3 characters.';
    }else if (productData.name.length > 30){
      errMsg = 'Name must be shorter that 30 characters.';
    }else if (scripRegex.test(productData.description)){
      errMsg = 'Invalid description input.'
    }else if (scripRegex.test(productData.name)){
      errMsg = 'Invalid name input.'
    }
    setError(errMsg)
    if(!errMsg){
      productsService.edit(prodId, productData)
      .then(result => {
        editProduct(prodId, result)
      })
    }
   
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

                  />
                </div>
              </div>
              <div className="div-cr-fact">
                  <label htmlFor="product" className="label-season">
                    Season*
                  </label>
                  <select className="custom-select" name="season" >             
              <option value={`${currentProd.season}`}   >{currentProd.season}</option>
                  </select>
                </div>

              <div className='div-cr-fact'>
                <div className="name-div">
                  <label htmlFor="name">
                    Product description*
                  </label>
                  <textarea
                        type="text"
                        className="form-input"
                        name="description"
                        cols={30}
                        rows={7}

                        defaultValue={currentProd.description}
                      />
                </div>
                {error && <span style={{ color: 'red', 'font-size': '20px' }}>{error}</span>}
              </div>

              <div className='create-prod-div'>
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