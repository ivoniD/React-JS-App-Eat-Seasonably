import './CreateNew.css'
import { create } from '../../services/productsService';
import { useContext } from 'react';
import { ProductsContext } from '../../contexts/ProductsContext';


export const CreateNew = () => {
const {addNewProductHandler} = useContext(ProductsContext)

  const onSubmit = (e) => {
    e.preventDefault();

    const productData = Object.fromEntries(new FormData(e.target))

    create(productData)
    .then(result => {
      console.log(result);
      addNewProductHandler(result)
    })
    // console.log(productData);

    
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
          <h2 className="heading">Add New Seasonal Product</h2>
          <form
            className="mb-5"
            method="post"
            id="contactForm"
            name="contactForm"
            onSubmit = {onSubmit}
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
                  // placeholder="Name of Dish"
                />
              </div>
              <div className="row mb-3">
              <div className="col-md-6 form-group">
                <label htmlFor="budget" className="col-form-label">
                 Season*
                </label>
                <select className="custom-select"name="season">
                  <option selected="">Choose...</option>
                  <option value='spring'>SPRING</option>
                  <option value='summer'>SUMMER</option>
                  <option value='autumn'>AUTUMN</option>
                  <option value='winter'>WINTER</option>
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
                  defaultValue={""}
                />
              </div>
            </div>
            
              
            </div>
            <div className="row">
              <div className="col-md-12">
                <input
                  type="submit"
                  value="Create"
                  className="submitBtn formInput btn btn-block btn-primary rounded-0 py-2 px-4"
                />
                <span className="submitting" />
              </div>
            </div>
          </form>
          <div id="form-message-warning mt-4" />
          <p className="error-message" id="form-message-success">Your message was sent, thank you!</p>
        </div>

    </div>
  </div>
</div>

  )
}