import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import './Login.css';
const Login = () => {
    const navigate=useNavigate();

    const[Input, setInput]=useState({
        
        email: "",
        password:""
    });
    const handleLogin=(e)=>{
        e.preventDefault();
        const loggeduser=JSON.parse(localStorage.getItem("user"));
        if(
            Input.email===loggeduser.email && Input.password===loggeduser.password)
            {
                navigate("/");
            }
            else{
                alert("wrong email id or password");
            }
    };

    return(<> <center><h1>LOGIN HERE</h1></center>;


<section class="vh-100">
  <div class="container-fluid h-custom l">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5">
        
      </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form onSubmit={handleLogin}>
          
            
          
          

        
          <div class="form-outline mb-4">
            <input  name="email" value={Input.email} onChange={(e)=> setInput({...Input,[e.target.name]:e.target.value,})} type="email" id="form3Example3" class="form-control form-control-lg"
              placeholder="Enter a valid email address" />
            <label class="form-label" for="form3Example3">Email address</label>
          </div>


          <div class="form-outline mb-3">
            <input   name="password" value={Input.passwordl} onChange={(e)=> setInput({...Input,[e.target.name]:e.target.value,})}type="password" id="form3Example4" class="form-control form-control-lg"
              placeholder="Enter password" />
            <label class="form-label" for="form3Example4">Password</label>
          </div>

          <div class="d-flex justify-content-between align-items-center">
            
        </div>

          <div class="text-center text-lg-start mt-4 pt-2">
            <button type="Login" class="btn btn-primary btn-lg">Login</button>
            <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="Register1"
                class="link-danger">Register</a></p>
          </div>
          
        </form>
      </div>
    </div>
  </div>
  <div
    class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">

    <div class="text-white mb-5 mb-md-0">
      Copyright © 2020. All rights reserved.
    </div>


    
    <div>
      
    
      
    </div>
  </div>
</section>
</>)
  }
  
  export default Login;