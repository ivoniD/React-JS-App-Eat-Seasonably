import './CreateFact.css'
import { create } from '../../../services/factService';
import { useContext, useEffect, useState } from 'react';
import { FactContext } from '../../../contexts/FactContext';
import { Link, useParams } from 'react-router-dom';
import { getOne } from '../../../services/productsService';


export const CreateFact = () => {
  const { addNewFactHandler } = useContext(FactContext)
  const [currentProd, setCurrentProd] = useState({})
  const [values, setValues] = useState({
    name: "",
    description: "",
  })
  const [error, setError] = useState({
    name: null,
    description: null,
  })
  const { prodId } = useParams();

  useEffect(() => {
    getOne(prodId)
      .then(result => {
        setCurrentProd(result)
      })

  }, [])

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
            newState[name] = "Title must be at lest 3 characters.";
          } else if (value.length > 25) {
            newState[name] = 'Title must be shorter that 25 characters.'
          } else if (scripRegex.test(value)) {
            newState[name] = 'Invalid input'
          } else {
            newState[name] = null;
          }
          break;
        case "description":
          if (value.length <= 8) {
            newState[name] = 'Description must be at lest 8 characters'
          } else if (value.length > 200) {
            newState[name] = 'Description must be shorter that 200 characters.'
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
              <select className="custom-select" name="product" >
                <option value={`${currentProd.name}`}>{currentProd.name}</option>
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
                  value={values.name} 
                  onChange={changeHandler}  
                  onBlur={validateInput}
                />
              </div>
              {error.name && <span style={{ color: 'red', 'font-size': '20px' }}>{error.name}</span>}
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
                  value={values.description} 
                  onChange={changeHandler}  
                  onBlur={validateInput}
                />
              </div>
              {error.description && <span style={{ color: 'red', 'font-size': '20px' }}>{error.description}</span>}
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