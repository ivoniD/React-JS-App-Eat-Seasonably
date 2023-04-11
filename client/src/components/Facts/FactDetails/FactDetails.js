import { Link, useNavigate } from "react-router-dom"
import './FactDetails.css'
import { useParams } from "react-router-dom"
import { useContext, useEffect, useState } from 'react';
import { FactContext } from "../../../contexts/FactContext";
import { AuthContext } from "../../../contexts/AuthContext";
import { getOne, del } from "../../../services/factService";


export const FactDetails = () => {
  const [ currentFact, setCurrentFact] = useState({})  
  const {factId, prodId, season} = useParams()
  const {deleteFact} = useContext(FactContext);
  const {user} = useContext(AuthContext);
  


useEffect(() => {
    getOne(factId)
    .then(result => {
      setCurrentFact(result)
    })
}, [])

    const factDeleteHandler = () => {
        const deleteIt = window.confirm('Do you want to delete this product!')
        if(deleteIt){
            del(factId)
                .then(() => {
                    deleteFact(factId)
                })
        }
    }   
// console.log(`current fact ${currentFact}`);

  return (
    <>
      <div className='home-cont'>
        <div className="info-section dtl-section">
          <div className="game-header">
          <h2 className="name-season fact-product">{currentFact.product}</h2>
            <h2 className="name-product">{currentFact.name}</h2>
 
          </div>
          <div className="details-comments">
            <p className="text">
              {currentFact.description}
            </p>
          </div>

         
            <div className="buttons">
            {(user.name && user._id === currentFact._ownerId) &&
            <>
              <Link to={`/facts/${currentFact._id}/edit`} className="button edit-btn">
                Edit
              </Link>
              <button onClick={factDeleteHandler} className="button del-btn">
                Delete
              </button>
              </>
               }
              <Link to={`/catalog/${season}/${prodId}`} className="button close-btn">
                Close
              </Link>
              
            </div>
         

        </div>
      </div>
    </>

  )
}