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
      <div className="dtl-sec">
        <div className="fact-header">
        <h2 className="nm-product nn-p">{currentFact.product} - {currentFact.name}</h2>
        <h2 className="nm-fact"></h2>
          
        </div>
        <div className="dt">
          <p className="text-fact-desc">
          {currentFact.description}
          </p>
        </div>
          <div className="buttons">
          {(user.name && user._id === currentFact._ownerId) &&
          <>
            <Link to={`/catalog/${season}/${prodId}/fact/${currentFact._id}/edit`} className="bt-ed">
              Edit
            </Link>
            <button onClick={factDeleteHandler} className="bt-del">
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

{/* <>
<div className='home-cont'>
  <div className="dtl-sec">
    <div className="fact-header">
    <h2 className="nm-product">{currentFact.product}</h2>
      <h2 className="nm-fact">{currentFact.name}</h2>
    </div>
    <div className="dt">
      <p className="text-fact-desc">
        {currentFact.description}
      </p>
    </div>
      <div className="buttons">
      {(user.name && user._id === currentFact._ownerId) &&
      <>
        <Link to={`/catalog/${season}/${prodId}/fact/${currentFact._id}/edit`} className="bt-ed">
          Edit
        </Link>
        <button onClick={factDeleteHandler} className="bt-del">
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
</> */}

