import './CreateFact.css'
import { create } from '../../../services/factService';
import { useContext, useEffect, useState } from 'react';
import { FactContext } from '../../../contexts/FactContext';
import { Link, useParams } from 'react-router-dom';
import { getOne } from '../../../services/productsService';


export const CreateFact = () => {
  const { addNewFactHandler } = useContext(FactContext)
  const [currentProd, setCurrentProd] = useState({})
  const [error, setError] = useState({
    name: null,
    description: null,
  })
   const {prodId} = useParams();

   useEffect(() => {
    getOne(prodId)
      .then(result => {
        setCurrentProd(result)
      })

  }, [])

  const onSubmit = (e) => {
    e.preventDefault();
    const factData = Object.fromEntries(new FormData(e.target))
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
              <option value={`${currentProd.name}`}   >{currentProd.name}</option>
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
            <div>
            <button
              type="submit"
              className='sbm-btn'
              disabled={error.name || error.description}
            >
            CREATE
            </button>
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