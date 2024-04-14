import React,{useEffect, useState} from 'react';
import WAVES from 'vanta/src/vanta.waves'
import ReactDOM from 'react-dom/client';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import PgHome from './Pages/HOME/PgHome';
import AccidentsPage from './Pages/Accidents/AccidentsPage';
import FirstAid from './Pages/Hospitals/FirstAid';
import ChemistDirectory from  './Pages/Chemist/ChemistDirectory';
import Navbar from './Navbar';
import Navmaking from './Navmaking';
import Login from './Pages/Login/Login';
import Register1 from './Pages/Register1/Register1'
import  Monitor  from './Pages/Monitor/Monitor';
 const App=()=>{
  // useEffect(()=>{
  //   WAVES({
      
  //     el: "#vanta",
  // mouseControls: true,
  // touchControls: true,
  // gyroControls: false,
  // minHeight: 250.00,
  // minWidth: 200.00,
  // scale: 1.00,
  // scaleMobile: 1.00,
  // color: 0x85fc,
  // shininess: 0.00,
  // waveHeight: 0.00,
  // waveSpeed: 1.25,
  // zoom: 1.27
  //   })
  // },[])
  return(
  <div>
    <Navmaking></Navmaking>
    <div className='bg' id='vanta'></div>

    <BrowserRouter>
    
    <Routes>
    <Route path="/" component={<Navbar/>}>
    <Route index element={<PgHome></PgHome>}></Route>
    <Route path='Register1' element={<Register1></Register1>}></Route>
    <Route path='PgHome' element={<PgHome></PgHome>}></Route>
    <Route path='Login' element={<Login></Login>}></Route>
    <Route path='ChemistDirectory' element={<ChemistDirectory></ChemistDirectory>}></Route>
    <Route path='FirstAid' element={<FirstAid></FirstAid>}></Route>
    <Route path='monitor' element={<Monitor></Monitor>}></Route>
    <Route path='PregnancyVaccination' element={<AccidentsPage></AccidentsPage>}></Route>
   
    </Route>
    </Routes>
  
  </BrowserRouter>
  
  </div>)
}

export default App;
