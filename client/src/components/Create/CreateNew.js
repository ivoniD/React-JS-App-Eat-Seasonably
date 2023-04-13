import './CreateNew.css'
import { create } from '../../services/productsService';
import { useContext } from 'react';
import { ProductsContext } from '../../contexts/ProductsContext';
import { Link } from 'react-router-dom';


export const CreateNew = () => {
  const { addNewProductHandler } = useContext(ProductsContext)

  const onSubmit = (e) => {
    e.preventDefault();

    const productData = Object.fromEntries(new FormData(e.target))
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
                  Product name*
                </label>
                <input
                  type="text"
                  className="form-input"
                  name="name"
                />
              </div>
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

            <div className='create-prod-div'>
              <p className='error-message' style={{ color: 'red', 'font-size': '15px', fontWeight: 'bold' }}>All fields are required!</p>
              <div >
                <button
                  type="submit"
                  className='sbm-btn'>CREATE</button>
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