import React from 'react';
import {Outlet, Link} from "react-router-dom";
function Navbar(){
    return(<div>
    <nav>
      
          <Link to="/PgHome"></Link>
          
          <Link to="/ChemistDirectory"></Link>
          <Link to="/FirstAid"></Link>
          <Link to="/PregnancyVaccination"></Link>
          <Link to="/monitor"></Link>
        
          
          <Link to="/Login"></Link>
      
    </nav>
    <Outlet></Outlet>
    </div>)
}
export default Navbar;