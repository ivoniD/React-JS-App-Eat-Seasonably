import './CreateProduct.css'
import { create } from '../../../services/productsService';
import { useContext, useState } from 'react';
import { ProductsContext } from '../../../contexts/ProductsContext';
import { Link } from 'react-router-dom';


export const CreateProduct = () => {
  const { addNewProductHandler, seasonProducts } = useContext(ProductsContext)
  const [error, setError] = useState({
    name: null,
    season: null,
    description: null
  })

  const validateName = (e) => {
    const name = e.target.value;
    let errorMsg = '';
    if (name.length < 3) {
      errorMsg = 'Product name must be more that 3 characters.'
    }
    if (name.length > 20) {
      errorMsg = 'Product name must be shorter that 20 characters.'
    }
    setError(state => ({
      ...state,
      name: errorMsg
    }))
  }
  const validateDescription = (e) => {
    const description = e.target.value;
    let errorMsg = '';
    if (description.length < 4) {
      errorMsg = 'Origin description must be more that 4 characters.'
    }
    if (description.length > 300) {
      errorMsg = 'Origin description  must be shorter that 300 characters.'
    }
    setError(state => ({
      ...state,
      description: errorMsg
    }))
  }


  const onSubmit = (e) => {
    e.preventDefault();
    let errorMsg = null
    const productData = Object.fromEntries(new FormData(e.target))
    if (!productData.season) {
      errorMsg = 'All fields are recuired';
      setError(state => ({
        ...state,
        season: errorMsg
      }))
    }

    for (const key in seasonProducts) {
      if (seasonProducts[key].name === productData.name) {
        errorMsg = 'Product with this name already exist in our collection.'
        setError(state => ({
          ...state,
          name: errorMsg
        }))
      }
    }


    if (!errorMsg)
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
                  onBlur={validateName}
                />
              </div>
              {error.name && <span style={{ color: 'red', 'font-size': '20px' }}>{error.name}</span>}
              <div className="div-cr-fact">
                <label htmlFor="season" className="label-season">
                  Season*
                </label>
                <select className="custom-select" name="season">
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
                  onBlur={validateDescription}
                />
              </div>
              {error.description && <span style={{ color: 'red', 'font-size': '20px' }}>{error.description}</span>}
            </div>
            {error.season && <span style={{ color: 'red', 'font-size': '20px' }}>{error.season}</span>}
            <div className='create-prod-div'>
              <div >
                <button
                  type="submit"
                  className='sbm-btn'
                  disabled={error.name || error.description }
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