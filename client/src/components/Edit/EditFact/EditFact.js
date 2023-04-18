import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import * as factService from '../../../services/factService'; 
import { FactContext } from "../../../contexts/FactContext";
import './EditFact.css'

export const EditFact = () => {
    const [currentFact, setCurrentFact] = useState({})
    const {season, prodId, factId} = useParams();
    const { editFact } = useContext(FactContext)
    const [error, setError] = useState(null)

    useEffect(() => {
        factService.getOne(factId)
          .then(data => {
            setCurrentFact(data)
          })
      }, [])

      const onSubmit = (e) => {
        e.preventDefault();
        const factData = Object.fromEntries(new FormData(e.target))

        const scripRegex = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
        let errMsg = null;

        if(!factData.name || !factData.description){
          errMsg = 'All fields are required!'
        }else if (factData.description.length < 8) {
          errMsg = 'Description must be at lest 8 characters';
        }else if(factData.description.length > 2000){
          errMsg = 'Description must be shorter that 2000 characters.';
        }else if (factData.name.length < 3){
          errMsg = 'Title must be at lest 3 characters.';
        }else if (factData.name.length > 30){
          errMsg = 'Title must be shorter that 30 characters.';
        }else if (scripRegex.test(factData.description)){
          errMsg = 'Invalid description input.'
        }else if (scripRegex.test(factData.name)){
          errMsg = 'Invalid title input.'
        }

        setError(errMsg)

        if(!errMsg){
          factService.edit(factId, factData)
          .then(result => {
              editFact(factId, result, season, prodId)     
          })
        }
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
                        Fact description*
                      </label>
                      <textarea
                        name="description"
                        cols={30}
                        rows={7}
                        defaultValue={currentFact.description}
                      />
                    </div>
                  </div>
                  {error && <span style={{ color: 'red', 'font-size': '20px' }}>{error}</span>}
              <div className='create-prod-div'>
                <div>
                  <button
                    type="submit"
                    className='sbm-btn'>SAVE</button>
                </div>
                <div className="product-close-actions">
            <Link to={`/catalog/${season}/${prodId}/facts/${factId}`} className="product-close-button">Close</Link>
          </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
};