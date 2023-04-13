import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import './EditFact.css'
import * as factService from '../../../services/factService'; 
import { FactContext } from "../../../contexts/FactContext";

export const EditFact = () => {
    const [currentFact, setCurrentFact] = useState({})
    const {season, prodId, factId} = useParams();
    const { editFact } = useContext(FactContext)
    const navigate = useNavigate()

    useEffect(() => {
        factService.getOne(factId)
          .then(data => {
            setCurrentFact(data)
          })
      }, [])

      const onSubmit = (e) => {
        e.preventDefault();
        const factData = Object.fromEntries(new FormData(e.target))
        // console.log(`fact data: ${factData.description}`);
        factService.edit(factId, factData)
        .then(result => {
            editFact(factId, result, season, prodId)
  
           
        })
      }
    

    return (
        <>
        <div className="home-cont">
          <div className='av'>
            <h2 className="sec-title">Edit Fact</h2>
            <form
              className="create-form-fact"
              method="post"
              onSubmit={onSubmit}
            >
              <div className="div-cr-fact">
                  <label htmlFor="product" className="label-season">
                    Fact about product*
                  </label>
                  <select className="custom-select" name="product">
                    <option>{currentFact.product}</option>
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
                    defaultValue={currentFact.name}
                    // defaultValue={}
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
                        defaultValue={currentFact.description}
                      />
                    </div>
                  </div>
              
    
              <div className='create-prod-div'>
                <p className='error-message' style={{ color: 'red', 'font-size': '15px', fontWeight: 'bold' }}>All fields are required!</p>
                <div >
                  <button
                    type="submit"
                    className='sbm-btn'>SAVE</button>
                </div>
                <div className="product-close-actions">
            <Link to={`/`} className="product-close-button">Close</Link>
          </div>
              </div>
            </form>
    
          </div>
        </div>
      </>
    
    );
};