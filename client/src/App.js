
import { CreateNew } from "./components/Create/CreateNew";
import { Header } from "./components/Header/Header";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { Seasons } from "./components/Seasons/Seasons";
import { Route, Routes } from 'react-router-dom';
import { Home } from "./components/Home/Home";
import {useEffect, useState} from 'react'
import './App.css'


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

function App() {
  const [seasonProducts, setSeasonProducts] = useState([]);
  const [user, setUser] = useLocalStorage('user', {})

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

  // const productDeleteHandler = async (prodId) => {
  //     await removeProduct(prodId);
      

  //     setSeasonProducts(oldState => oldState.filter(x => x._id !== prodId))
  // } 

  return (
  <ProductsContext.Provider value={seasonProducts}>
  <AuthContext.Provider value={{user, userLogin, userLogout}}>
    <div className="content">

      <Header/>

      <Routes>
          <Route path = '/' element={<Home />} />
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/seasons' element={<Seasons />}/>
          <Route path='/create' element={<CreateNew />}  />
          <Route path= '/facts' element= {<Facts/>} />
          <Route path='/catalog/:season' element = {<SeasonallProducts data={seasonProducts} />} />
          <Route path='/edit' element = {<Edit />} />
          <Route path='/profil' element = {<Profile />} />
          <Route path='/logout' element= {<Logout />}/>
          <Route path='/catalog/:season/:prodId' element = {<ProductDetails data={seasonProducts}/>} />
      </Routes>

    </div>
    </AuthContext.Provider>
</ProductsContext.Provider>
  );
}

export default App;


