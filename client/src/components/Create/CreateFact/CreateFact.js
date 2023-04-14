import './CreateFact.css'
import { create } from '../../../services/factService';
import { useContext, useState } from 'react';
import { FactContext } from '../../../contexts/FactContext';
import { ProductsContext } from '../../../contexts/ProductsContext';
import { Link, useParams } from 'react-router-dom';


export const CreateFact = () => {
  const { addNewFactHandler } = useContext(FactContext)
  const { seasonProducts } = useContext(ProductsContext)
  const [error, setError] = useState({
    name: null,
    description: null,
    produst: null
  })
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
    let errorMsg = ''
    const factData = Object.fromEntries(new FormData(e.target))
    if(!factData.product){
      errorMsg = 'All fields are recuired';
      setError(state => ({
        ...state,
        produst: errorMsg
      }))
    }
    if(factData.product)
    create(factData)
      .then(result => {
        addNewFactHandler(result)
      })
  }
  const validateName = (e) => {
    const name = e.target.value;
    let errorMsg = '';
    if(name.length < 4){
      errorMsg = 'Title must be more that 4 characters.'
    }
    if(name.length > 20){
      errorMsg = 'Title must be shorter that 20 characters.'
    }
    setError(state => ({
      ...state,
      name: errorMsg
    }))
  }

  const validateDescription = (e) => {
    const description = e.target.value;
    let errorMsg = '';
     if(description.length < 4){
      errorMsg = 'Description must be more that 4 characters.'
    }
    if(description.length > 140){
      errorMsg = 'Description must be shorter that 140 characters.'
    }
    setError(state => ({
      ...state,
      description: errorMsg
    }))
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
              <select className="custom-select" name="product" >             
              <option value="" disabled selected  >Select Product</option>
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
                onBlur={validateName}
              />
            </div>
            {error.name && <span style={{color: 'red', 'font-size': '20px'}}>{error.name}</span>}
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
                    onBlur={validateDescription}
                  />
                </div>
                {error.description && <span style={{color: 'red', 'font-size': '20px'}}>{error.description}</span>}
              </div>
          

          <div className='create-prod-div'>
            {/* <p className='error-message' style={{ color: 'red', 'font-size': '15px', fontWeight: 'bold' }}>All fields are required!</p> */}
            <div>
      
              
            <button
              type="submit"
              className='sbm-btn'
              disabled={error.name || error.description}
            >
            CREATE
            </button>
            </div>
            {error.produst && <span style={{color: 'red', 'font-size': '20px'}}>{error.produst}</span>}
            {/* <span className='all-fields' style={{color: 'red', 'font-size': '20px'}}>All fields are required.</span> */}
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