import {  createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as factService from '../services/factService'



export const FactContext = createContext()

export const FactsProvider = ({
  children,
}) => {
  const [facts, setFacts] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    factService.getAll()
      .then(data => {
        !data.message && setFacts(Object.values(data))
      }).catch(err => console.log(err))
  },[]);

  const currentFact = (factId) => {
    let fact = facts.filter(x => x._id === factId)
    return(fact)
    }
  

  const addNewFactHandler = (fact, prodId, season) => {
    setFacts(state => [...state, fact]);

    navigate(`/catalog/${season}/${prodId}/fact/${fact._id}`)
  }
  const editFact = (factId, factData, season, prodId) => {
    setFacts(oldState => oldState.map(x => x._id === factId ? factData : x))
    navigate(`catalog/${season}/${prodId}/fact/${factId}`)
  }
  
  const deleteFact = (factId, season, prodId) => {
    setFacts(oldState => oldState.filter(x => x._id !== factId))
    navigate(`/catalog/${season}/${prodId}`)
  }


  const factContextValue = { facts, deleteFact, addNewFactHandler, editFact, currentFact }

  return(
    <FactContext.Provider value={factContextValue}>
      {children}
    </FactContext.Provider>
  )
}

