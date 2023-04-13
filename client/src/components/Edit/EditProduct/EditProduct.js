import './EditProduct.css'
import { useContext, useEffect, useState } from 'react';
import { ProductsContext } from '../../../contexts/ProductsContext';
import { useParams, useNavigate } from 'react-router-dom';
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

 

  
  return(
    <>
        <div className="home-cont">
          <div className='create-form'>
          <h2 className="heading-create">Edit Product</h2>
          <form
            className="mb-5"
            method="post"
            id="contactForm"
            name="contactForm"
            onSubmit = {onSubmit}
          >
            <div className="row">
              <div className="col-md-6 form-group name-div">
                <label htmlFor="name" className="col-form-label">
                  Product Name*
                </label>
                <input
                  type="text"
                  className="f"
                  name="name"
                  value={currentProd.name}
                  readonly = "readonly"
                />
              </div>
              <div className="row mb-3">
              <div className="col-md-6 form-group">
                <label htmlFor="budget" className="col-form-label">
                 Season*
                </label>
                <select className="custom-select"name="season" placeholder='Choose...'>
                  <option >{currentProd.season}</option>
                  <option className="spr" value='spring'>SPRING</option>
                  <option className="sum" value='summer'>SUMMER</option>
                  <option className="aut" value='autumn'>AUTUMN</option>
                  <option className="win" value='winter'>WINTER</option>
                </select>
              </div>
            </div>              
            </div>
            <div className="row">
            <div id="form-message-warning mt-4" />
          <p className="error-message"  style={{ color: 'red', 'font-size': '15px', fontWeight: 'bold'}}>All fields are required!</p>
              <div className="col-md-12">
                <input
                  type="submit"
                  value="Create"
                  className="create-btn formInput btn btn-block btn-primary rounded-0 py-2 px-4"
                />
                <span className="submitting" />
              </div>
            </div>
          </form>
          
        </div>
        </div>


</>

  )
}