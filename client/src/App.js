
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



function App() {

  const [springFood, setSpringFood] = useState([]);
  const [summerFood, setSummerFood] = useState([]);
  // const [summerFacts, setSummerFacts] = useState([]);
  const [autumnFood, setAutumnFood] = useState([]);
  const [winterFood, setWinterFood] = useState([]);


  useEffect(() => {
    fetch('http://localhost:3030/jsonstore/seasons')
       .then((res) => res.json())
       .then((data) => {
          // console.log(data.summer.food);
          setSummerFood(data.summer.food);
          setAutumnFood(data.autumn.food);
          setSpringFood(data.spring.food);
          setWinterFood(data.winter.food);

       })
      //  .catch((err) => {
      //     console.log(err.message);
      //  });
 },[]);

 
//  console.log('---');
//  console.log(summerFood);
//  console.log('---');
//  console.log(summerFacts);
  return (
<div className="content">

<Header/>
<Routes>


{/* <Login /> */}
{/* <Register /> */}

{/* <Seasons /> */}



<Route path='/seasons' element={<Seasons />}/>
<Route path='/login' element={<Login />}/>
<Route path='/register' element={<Register />}/>
<Route path='/create' element={<CreateNew />}  />
<Route path = '/' element={<Home />} />
<Route path= '/facts' element= {<Facts/>} />
<Route path='/summer/food' element = {<SummerProducts data={summerFood} />} />
<Route path='/autumn/food' element = {<AutumnProducts data={autumnFood} />} />
<Route path='/spring/food' element = {<SpringProducts data={springFood} />} />
<Route path='/winter/food' element = {<WinterProducts data={winterFood} />} />
<Route path='/edit' element = {<Edit />} />
<Route path='/profil' element = {<Profile />} />

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