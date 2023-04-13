import './CreateFact.css'
import { create } from '../../../services/factService';
import { useContext } from 'react';
import { FactContext } from '../../../contexts/FactContext';
import { ProductsContext } from '../../../contexts/ProductsContext';
import { Link, useParams } from 'react-router-dom';


export const CreateFact = () => {
  const { addNewFactHandler } = useContext(FactContext)
  const { seasonProducts } = useContext(ProductsContext)
  // const {prodId, season} = useParams();

  // const currentProduct = ''
  // if(prodId){
  //   let productData = seasonProducts.filter(x=> x.id === prodId)
  //   currentProduct = productData.name
//   // }
// console.log(`currentproduct fo create ${currentProduct}`);
// console.log(`pr id ${prodId}`);

  const onSubmit = (e) => {
    e.preventDefault();

    const factData = Object.fromEntries(new FormData(e.target))
    create(factData)
      .then(result => {
        addNewFactHandler(result)
      })

  }

  return (
    <>
    <div className="home-cont">
      <div className='av'>
        <h2 className="sec-title">Create New Fact</h2>
        <form
          className="create-form-fact"
          method="post"
          onSubmit={onSubmit}
        >
          <div className="div-cr-fact">
              <label htmlFor="season" className="label-season">
                Fact about product*
              </label>
              <select className="custom-select" name="product">
              <option value="" disabled selected>Select Product</option>
             { seasonProducts.map(x =>  <option className="spr opt" >{x.name}</option>) }
              </select>
            </div>
          <div className='div-cr-fact'>
            <div className="name-div">
              <label htmlFor="name">
                Fact title*
              </label>
              <input
                type="text"
                className="form-input"
                name="name"
              />
            </div>
          </div>
          <div className='create-fact-div'>
                <div className="form-group">
                  <label htmlFor="message">
                    Fact information*
                  </label>
                  <textarea
                    name="description"
                    cols={30}
                    rows={7}
                  />
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