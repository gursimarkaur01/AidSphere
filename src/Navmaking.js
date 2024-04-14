import React from 'react';
import {Outlet, Link} from "react-router-dom";
import './App.css';
import { useState } from "react";
import Login from './Pages/Login/Login'
import './Navmaking.css';

function Navmaking(){
  const [popup,setpopup]=useState(false);
    return(<div>
        <nav className="navbar navbar-expand-lg ">
          
  <div className="container-fluid">
    
    <a className="navbar-brand">
      <div><h1>AidSphere</h1></div>
</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={()=>setpopup(!popup)}>
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className='collapse navbar-collapse ${popup ? "popup" : " " }' id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item" >
          <a className="nav-link" aria-current="page" href="PgHome">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="ChemistDirectory">ChemistDirectory</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="FirstAid">Hospitals</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="PregnancyVaccination">Accidents</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="monitor">Patient Monitor</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="Register1">Register</a>
        </li>
        
      </ul>
      <form className="d-flex" role="search">
        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input> */}
        
        {/* <button className="btn btn-outline-success" type="login" >login</button> */}
      </form>
    </div>
  </div>
</nav>
    </div>)
}
export default Navmaking;
