import Dashboard from './Component/Dashboard';
import './App.css';
import Ed from './Component/Ed';
import Home from './Component/Home';
import Edit from './Component/Edit';
import Adduser from './Component/Adduser';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import { useState } from 'react';
import Email  from './Component/Email';

import Newpass from './Component/Newpass';


function App() {
  var data={
    usercount:"45,000",
    admincount:"12,00,000",
   level:20,
  };
  let [user,setuser]=useState([{
    name:"karthiga",
    email:"kar@gmail.com",
    mobile:"9344245002"
  },
{
  name:"karthiga rani",
  email:"karrani@gmail.com",
 mobile:"9678901987"
}])
  return <>
  <div id='wrapper'>
  <BrowserRouter>

   
  
<Routes>
    <Route path='/' element={<Ed/>} />
<Route path='/dashboard' element={<Dashboard data={{data,user,setuser}} />} />
<Route path='/add-user' element={<Adduser user={{user,setuser}}/>} />
<Route path='/edit/:id' element={<Edit user={{user,setuser}}/>} />
<Route path='/login' element={<Home/>} />
<Route path='/email' element={<Email/>} />

<Route path='/api/password-reset/:id/:token' element={<Newpass/>} />
</Routes>
</BrowserRouter></div>
  </>
}

export default App;