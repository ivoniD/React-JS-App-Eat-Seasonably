
import { CreateNew } from "./components/Create/CreateNew";
import { Header } from "./components/Header/Header";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { Seasons } from "./components/Seasons/Seasons";
import { Route, Routes } from 'react-router-dom';
import { Home } from "./components/Home/Home";
import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './App.css'
import { useLocation } from 'react-router-dom'

import { Facts } from "./components/Facts/Facts";
import { Edit } from "./components/Edit/Edit";
import { Profile } from "./components/Profile/Profile";
import { ProductDetails } from "./components/Products/ProductDetails/ProductDetails";
import { SeasonallProducts } from "./components/Products/SeasonallProducts/SeasonallProducts";
import { ProductsContext } from "./contexts/ProductsContext";
import { AuthContext } from "./contexts/AuthContext";
import * as productService from './services/productsService'
import { Logout } from "./components/Logout/Logout";
import { useLocalStorage } from "./services/useLocalStorage";
import { NotFound } from "./components/NotFound/NotFound";

function App() {
  const [seasonProducts, setSeasonProducts] = useState([]);
  const [user, setUser] = useLocalStorage('user', {})
  const navigate = useNavigate();
  // const location = useLocation();
  // const isNotFound = location.pathname === '*';

  useEffect(() => {
      productService.getAll()
        .then(data => {
          setSeasonProducts(data)
        })
 },[]);

  const userLogin = (user) => {
    //TODO if ....
    setUser(user)
  }

  const userLogout = () => {
    setUser({})
  }
  const addNewProductHandler = (newProduct) => {
      setSeasonProducts(state => [...state, {...newProduct}]);
      navigate('/seasons')
  }
  

  const editProduct = (prodId, prodData) => {
    setSeasonProducts(state => state.map(x => x._id === prodId ? prodData : x))
  }

  
  const contextValue = { seasonProducts, addNewProductHandler, editProduct};
  // const productDeleteHandler = async (prodId) => {
  //     await removeProduct(prodId);  
  //     setSeasonProducts(oldState => oldState.filter(x => x._id !== prodId))
  // } 

  return (
  <ProductsContext.Provider value={contextValue}>
  <AuthContext.Provider value={{user, userLogin, userLogout}}>
    <div className="content">

    <Header />

      <Routes>
          <Route path = '/' element={<Home />} />
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/seasons' element={<Seasons />}/>
          <Route path='/create' element={<CreateNew  />}  />
          <Route path= '/facts' element= {<Facts/>} />
          <Route path='/catalog/:season' element = {<SeasonallProducts/>} />
          <Route path='/catalog/:season/:prodId/edit' element = {<Edit />} />
          <Route path='/profil' element = {<Profile />} />
          <Route path='/logout' element= {<Logout />}/>
          <Route path='/catalog/:season/:prodId' element = {<ProductDetails/>} />
          {/* <Route path="*" element= {<NotFound />} /> */}
      </Routes>

    </div>
    </AuthContext.Provider>
</ProductsContext.Provider>
  );
}

export default App;


