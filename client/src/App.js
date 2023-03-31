
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
import { SummerProducts } from "./components/Products/SummerProducts/SummerProducts";
import { AutumnProducts } from "./components/Products/AutumnProducts/AutumnProducts";
import { SpringProducts } from "./components/Products/SpringProducts/SpringProducts";
import { WinterProducts } from "./components/Products/WinterProducts/WinterProducts";
import { ProductDetails } from "./components/ProductDetails/ProductDetails";



function App() {

  const [springProducts, setSpringProducts] = useState([]);
  const [summerProdusts, setSummerProdusts] = useState([]);
  const [autumnProdusts, setAutumnProdusts] = useState([]);
  const [winterProdusts, setWinterProducts] = useState([]);


  useEffect(() => {
    fetch('http://localhost:3030/data/seasons')
       .then((res) => res.json())
       .then((data) => {
        let spring = data.filter(x => x.season == 'spring')
        let summer = data.filter(x => x.season == 'summer')
        let autumn = data.filter(x => x.season == 'autumn')
        let winter = data.filter(x => x.season == 'winter')

        setSpringProducts(spring)
        setSummerProdusts(summer)
        setAutumnProdusts(autumn)
        setWinterProducts(winter)
       })
      //  .catch((err) => {
      //     console.log(err.message);
      //  });
 },[]);



  return (
<div className="content">

<Header/>

<Routes>
    <Route path = '/' element={<Home />} />
    <Route path='/login' element={<Login />}/>
    <Route path='/register' element={<Register />}/>

    <Route path='/seasons' element={<Seasons />}/>
    <Route path='/create' element={<CreateNew />}  />
  
    <Route path= '/facts' element= {<Facts/>} />
    <Route path='/catalog/summer' element = {<SummerProducts data={summerProdusts} />} />
    <Route path='/catalog/autumn' element = {<AutumnProducts data={autumnProdusts} />} />
    <Route path='/catalog/spring' element = {<SpringProducts data={springProducts} />} />
    <Route path='catalog/winter' element = {<WinterProducts data={winterProdusts} />} />
    <Route path='/edit' element = {<Edit />} />
    <Route path='/profil' element = {<Profile />} />
    {/* <Route path='/' */}
    <Route path='/catalog/:season/:prodId' element = {<ProductDetails />} />
</Routes>

</div>
  
  );
}

export default App;

/**
 * Routes>
          <Route path='/create/employee' element={<CreateNewEmployee addNew={employeesHandler} />} />
          <Route path='/create/task' element={<CreateNewTask addNew={taskHandler} allEmployees={allEmployees} />} />
          <Route path='/employees' element={<EmployeesList allEmployees={allEmployees} onEditClick={onEditEmployeeHandler} deleteOne={deleteEmployeeHandler} />} />
          <Route path='/tasks' element={<TasksList allTasks={allTasks} deleteOne={deleteTaskHandler} onEditClick={onEditTaskHandler} />} />
          <Route path='/edit/task' element={<EditTask editTask={editTask} task={currentClickedTask[0]} />} />
          <Route path='/edit/employee' element={<EditEmployee editEmpoloyee={editEmpoloyee} employee={currentClickedEmployee[0]} />} />
          <Route path='/bestEmployees' element={<BestEmployees lastMonthBest={lastMonthBest} />} />

        </Routes>

 */