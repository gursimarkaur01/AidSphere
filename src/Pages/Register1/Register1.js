import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import Footer from "../Footer/Footer";
const Register1 = () => {
     const navigate=useNavigate();

    const[Input, setInput]=useState({
        name:"",
        email: "",
        password:""


    });
    const handleSubmit=(e)=>{
        e.preventDefault();
        localStorage.setItem("user", JSON.stringify(Input));
        navigate("/Login")
    };
    return(<>;
    <section classNameName="vh-100 bg-image">
  <div className="main"></div>
  <div className="mask d-flex align-items-center h-100 gradient-custom-3">
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card" >
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5">Create an account</h2>

              <form onSubmit={handleSubmit}>

                <div className="form-outline mb-4">
                  <input name="name" value={Input.name} onChange={(e)=> setInput({...Input,[e.target.name]:e.target.value,})}
                   type="text" id="form3Example1cg" className="form-control form-control-lg" />
                  <label className="form-label" for="form3Example1cg">Your Name</label>
                </div>

                <div className="form-outline mb-4">
                  <input name="email" value={Input.email} onChange={(e)=> setInput({...Input,[e.target.name]:e.target.value,})} type="email" id="form3Example3cg" className="form-control form-control-lg" />
                  <label className="form-label" for="form3Example3cg">Your Email</label>
                </div>

                <div className="form-outline mb-4">
                  <input    name="password" value={Input.password} onChange={(e)=> setInput({...Input,[e.target.name]:e.target.value,})}type="password" id="form3Example4cg" className="form-control form-control-lg" />
                  <label className="form-label" for="form3Example4cg">Password</label>
                </div>

                

                

                <div className="d-flex justify-content-center">
                  <button type="submit"
                    className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                </div>

                <p className="text-center text-muted mt-5 mb-0">Have already an account? <a href="Login"
                    className="fw-bold text-body"><u>Login here</u></a></p>

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<footer></footer>
</>
    );

  };
  
  export default Register1;