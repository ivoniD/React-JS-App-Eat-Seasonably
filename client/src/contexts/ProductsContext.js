import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as productService from'../services/productsService';

export const ProductsContext = createContext()

export const ProductsProvider = ({
  children
}) => {
  const [seasonProducts, setSeasonProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    productService.getAll()
      .then(data => {
        // console.log(`data: ${data}`);
        !data.message && setSeasonProducts(Object.values(data))
      }).catch(err => console.log(err))
},[]);

  const addNewProductHandler = (newProduct) => {
    setSeasonProducts(state => [...state, newProduct]);
    navigate(`/catalog/${newProduct.season}`)
  }
  const editProduct = (prodId, prodData) => {
  setSeasonProducts(state => state.map(x => x._id === prodId ? prodData : x))
  navigate(`/catalog/${prodData.season}/${prodId}`)
  }
  const deleteProduct = (prodId, season) => {
  setSeasonProducts(oldState => oldState.filter(x => x._id !== prodId))
  navigate(`/catalog/${season}`)
  } 

  const currentProduct = (prodId) => {
  let result = seasonProducts.filter(x => x._id === prodId)
  return(result)
  }


  const productContextValue = { seasonProducts, addNewProductHandler, editProduct, deleteProduct, currentProduct};

  return(
    <ProductsContext.Provider value={productContextValue}>
      {children}
    </ProductsContext.Provider>
  )
}