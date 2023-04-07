import './Edit.css'
import { useContext, useEffect, useState } from 'react';
import { ProductsContext } from '../../contexts/ProductsContext';
import { useParams, useNavigate } from 'react-router-dom';
import * as productsService from '../../services/productsService'; 

export const Edit = () => {
  const [currentProd, setCurrentProd] = useState({})
  const { editProduct } = useContext(ProductsContext)
  const {season, prodId} = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    productsService.getOne(prodId)
      .then(productData => {
        setCurrentProd(productData)

        // console.log(productData);
          
      })
  }, [])

  const onSubmit = (e) => {
    e.preventDefault();

    const productData = Object.fromEntries(new FormData(e.target))


    productsService.edit(prodId, productData)
    .then(result => {
      // console.log(result);
      editProduct(prodId, result)
    })
  }

 

  
  return(
    <div className="content createCont">
  <div className="container">
    <div className="row">
    <div className="col-md-5 mr-auto">
        <h3 className="mb-3"></h3>
        <p>
        
        </p>
        
      </div>

        <div className="box">
          <h2 className="heading">Edit</h2>
          <form
            className="mb-5"
            method="post"
            id="contactForm"
            name="contactForm"
            onSubmit={onSubmit}
          >
            <div className="row">
              <div className="col-md-6 form-group">
                <label htmlFor="name" className="col-form-label">
                  Name*
                </label>
                <input
                  type="text"
                  className="formInput"
                  name="name"
                  id="name"
                  defaultValue={currentProd.name}
                  // placeholder="Name of Dish"
                />
              </div>
              <div className="row mb-3">
              <div className="col-md-6 form-group">
                <label htmlFor="budget" className="col-form-label">
                 Season*
                </label>
                <select className="custom-select" id="budget" name="season" >
                  <option >{currentProd.season}</option>
                  <option value="spring">SPRING</option>
                  <option value="summer">SUMMER</option>
                  <option value="autumn">AUTUMN</option>
                  <option value="winter">WINTER</option>
                </select>
              </div>
              <div className="col-md-6 form-group">
                <label htmlFor="imageUrl" className="col-form-label">
                  Image*
                </label>
                <input
                  type="text"
                  className="formInput"
                  name="imageUrl"
                  defaultValue={currentProd.imageUrl}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 form-group">
                <label htmlFor="message" className="col-form-label">
                  Benefits *
                </label>
                <textarea
                  className="formInput"
                  name="description"
                  id="message"
                  cols={30}
                  rows={7}
                  defaultValue={currentProd.description}
                />
              </div>
            </div>
            
              
            </div>
            <div className="row">
              <div className="col-md-12">
                <input
                  type="submit"
                  value="Save"
                  className="submitBtn formInput btn btn-block btn-primary rounded-0 py-2 px-4"
                />
                <span className="submitting" />
              </div>
            </div>
          </form>
          <div id="form-message-warning mt-4" />
          {/* <p className="formInput" id="form-message-success">Your message was sent, thank you!</p> */}
        </div>

    </div>
  </div>
</div>

  )
}