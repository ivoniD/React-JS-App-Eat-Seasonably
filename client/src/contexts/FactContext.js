import {  createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as factService from '../services/factService'
import { ProductsContext } from '../contexts/ProductsContext';


export const FactContext = createContext()

export const FactsProvider = ({
  children,
}) => {
  const [facts, setFacts] = useState([]);
  const navigate = useNavigate();
  const { seasonProducts } = useContext(ProductsContext)
  
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
  

  const addNewFactHandler = (fact) => {
    setFacts(state => [...state, fact]);
    const currentProd = (seasonProducts.filter(x=> x.name === fact.product)) 
    navigate(`/catalog/${currentProd[0].season}/${currentProd[0]._id}`)
  }
  const editFact = (factId, factData, season, prodId) => {
    setFacts(oldState => oldState.map(x => x._id === factId ? factData : x))
    navigate(`catalog/${season}/${prodId}/fact/${factId}`)
  }
  
  const deleteFact = (factId, season, prodId) => {
    setFacts(oldState => oldState.filter(x => x._id !== factId))
    console.log(`prodId to redirect ${prodId}`);
    navigate(`/catalog/${season}/${prodId}`)
  }


  const factContextValue = { facts, deleteFact, addNewFactHandler, editFact, currentFact }

  return(
    <FactContext.Provider value={factContextValue}>
      {children}
    </FactContext.Provider>
  )
}

