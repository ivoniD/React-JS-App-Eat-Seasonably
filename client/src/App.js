import { Route, Routes } from 'react-router-dom';
import { Header } from "./components/Header/Header";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { Seasons } from "./components/Seasons/Seasons";
import { Home } from "./components/Home/Home";
import { PrivateRoute }  from "./components/RouteGuards/PrivateRoute";
import { Profile } from "./components/Profile/Profile";
import { ProductDetails } from "./components/Products/ProductDetails/ProductDetails";
import { ProductsList } from "./components/Products/ProductsList/ProductsList";
import { ProductsProvider } from "./contexts/ProductsContext";
import { AuthProvider } from "./contexts/AuthContext";
import { FactsProvider } from "./contexts/FactContext";
import { Logout } from "./components/Logout/Logout";

import { Footer } from "./components/Footer/Footer";
import { FactDetails } from './components/Products/ProductDetails/FactDetails/FactDetails';
import { CreateFact } from "./components/Create/CreateFact/CreateFact";
import { EditProduct } from "./components/Edit/EditProduct/EditProduct";
import { EditFact } from "./components/Edit/EditFact/EditFact";
import './App.css'
import { CreateProduct } from "./components/Create/CreateProduct/CreateProduct";
import { ProductOwner } from './components/RouteGuards/ProductOwner';
import { FactOwner } from './components/RouteGuards/FactOwner';


function App() {

  return (
  <AuthProvider>
  <ProductsProvider>
  <FactsProvider>

  <div className="root">
    <Header />

      <Routes>
          <Route path = '/' element={<Home />} />
          <Route path='/catalog' element={<Seasons/>}/>
          <Route path='/catalog/:season' element = {<ProductsList/>} />
          <Route path='/catalog/:season/:prodId/fact/:factId' element = {<FactDetails />} />
          <Route path='/catalog/:season/:prodId' element = {<ProductDetails/>} />
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/create/product' element={<PrivateRoute><CreateProduct /></PrivateRoute>}  />
          <Route path='/catalog/:season/:prodId/create' element={<PrivateRoute><CreateFact /></PrivateRoute>}  />
          <Route path='/catalog/:season/:prodId/edit' element = {<ProductOwner><PrivateRoute><EditProduct /></PrivateRoute></ProductOwner>} />
          <Route path='/catalog/:season/:prodId/fact/:factId/edit' element = {<PrivateRoute><FactOwner><EditFact /></FactOwner></PrivateRoute>} />
          <Route path='/profil' element = {<PrivateRoute><Profile /></PrivateRoute>} />
          <Route path='/logout' element= {<PrivateRoute><Logout /></PrivateRoute>}/>
          <Route path="*" element= {<Home />} />
      </Routes>

     <Footer />
    </div>

    </FactsProvider>
    </ProductsProvider>
    </AuthProvider>

  );
}

export default App;


