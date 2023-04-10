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
      console.log(result.season);
      addNewProductHandler(result)
    })
    // console.log(productData);

    
  }

  return(
    <>

 

        <div className="home-cont">
          <div className='create-form'>
          <h2 className="heading-create">Add New Seasonal Product</h2>
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
                  Name*
                </label>
                <input
                  type="text"
                  className="formInput"
                  name="name"
                  // placeholder="Name of Dish"
                />
              </div>
              <div className="row mb-3">
              <div className="col-md-6 form-group">
                <label htmlFor="budget" className="col-form-label">
                 Season*
                </label>
                <select className="custom-select"name="season" placeholder='Choose...'>
                  {/* <option selected="">Choose...</option> */}
                  <option className="spr" value='spring'>SPRING</option>
                  <option className="sum" value='summer'>SUMMER</option>
                  <option className="aut" value='autumn'>AUTUMN</option>
                  <option className="win" value='winter'>WINTER</option>
                </select>
              </div>
              {/* <div className="col-md-6 form-group">
                <label htmlFor="imageUrl" className="col-form-label">
                  Image*
                </label>
                <input
                  type="text"
                  className="formInput"
                  name="imageUrl"
                />
              </div> */}

            </div>
            
            {/* <div className="row"> */}
              {/* <div className="col-md-12 form-group">
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
              </div> */}
            {/* </div> */}
            
              
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