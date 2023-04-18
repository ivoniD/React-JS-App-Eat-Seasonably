import './CreateProduct.css'
import { create } from '../../../services/productsService';
import { useContext, useState } from 'react';
import { ProductsContext } from '../../../contexts/ProductsContext';
import { Link } from 'react-router-dom';


export const CreateProduct = () => {
  const { addNewProductHandler, seasonProducts } = useContext(ProductsContext)
  const [values, setValues] = useState({
    name: "",
    description: ""
  })
  const [error, setError] = useState({
    name: null,
    description: null
  })

  const changeHandler = (e) => {
    let { name, value } = e.target
    setValues(state => ({
      ...state,
      [name]: value
    }))
    validateInput(e)
  }


  const validateInput = (e) => {
    let { name, value } = e.target;

    const scripRegex = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;

    setError(state => {
      const newState = { ...state };
      switch (name) {
        case "name":
          if (value.length < 3) {
            newState[name] = 'Product name must be at lest 3 characters.';
          } else if (value.length > 25) {
            newState[name] = 'Product name must be shorter that 25 characters.'
          } else if (scripRegex.test(value)) {
            newState[name] = 'Invalid input'
          } else {
            newState[name] = null;
          }
          break;
        case "description":
          if (value.length < 8) {
            newState[name] = 'Description must be at lest 8 characters'
          } else if (value.length > 700) {
            newState[name] = 'Description must be shorter that 700 characters.'
          } else if (scripRegex.test(value)) {
            newState[name] = 'Invalid input'
          } else {
            newState[name] = null;
          }
          break;
        default:
          break;
      }
      return newState;
    })
  };



  const onSubmit = (e) => {
    e.preventDefault();
    const productData = Object.fromEntries(new FormData(e.target))
    let errorNameExist = null;
    for (const key in seasonProducts) {
      if ((seasonProducts[key].name).toLowerCase() === (productData.name).toLocaleLowerCase()) {
        errorNameExist = 'Product with this name already exist in our collection.'
      }
      setError(state => ({
        ...state,
        name: errorNameExist
      }))
    }


    if (!errorNameExist && productData.season )
      create(productData)
        .then(result => {
          addNewProductHandler(result)
        })
  }

  return (
    <>
      <div className="home-cont">
        <div className='av'>
          <h2 className="sec-title">Add New Seasonal Product</h2>
          <form
            className="create-form-fact"
            method="post"
            onSubmit={onSubmit}
          >
            <div className='div-cr-fact'>
              <div className="name-div">
                <label htmlFor="name">
                  Product name* (banana, apple...etc)
                </label>
                <input
                  type="text"
                  className="form-input"
                  name="name"
                  value={values.name}
                  onChange={changeHandler}
                  onBlur={validateInput}
                />
              </div>
              {error.name && <span style={{ color: 'red', 'font-size': '20px' }}>{error.name}</span>}
              <div className="div-cr-fact">
                <label htmlFor="season" className="label-season">
                  Season*
                </label>
                <select className="custom-select" name="season" >
                  <option value="" disabled selected>Select Season</option>
                  <option className="spr opt" value='spring'>SPRING</option>
                  <option className="sum opt" value='summer'>SUMMER</option>
                  <option className="aut opt" value='autumn'>AUTUMN</option>
                  <option className="win opt" value='winter'>WINTER</option>
                </select>
              </div>
            </div>

            <div className='create-fact-div'>
              <div className="form-group">
                <label htmlFor="message">
                  About product*
                </label>
                <textarea
                  name="description"
                  cols={30}
                  rows={7}
                  value={values.description}
                  onChange={changeHandler}
                  onBlur={validateInput}
                />
              </div>
              {error.description && <span style={{ color: 'red', 'font-size': '20px' }}>{error.description}</span>}
            </div>

            <div className='create-prod-div'>
              <div >
                <button
                  type="submit"
                  className='sbm-btn'

                >CREATE</button>
              </div>
              <div className="product-close-actions">
                <Link to={`/`} className="product-close-button">Close</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}