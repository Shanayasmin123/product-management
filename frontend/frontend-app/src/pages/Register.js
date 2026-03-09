import React, { useState } from "react";
import API from "../api";
import { Link, useNavigate } from "react-router-dom";

function Register() {

const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const navigate = useNavigate();

const handleSubmit = async(e)=>{
e.preventDefault();

await API.post("/auth/register",{
name,
email,
password
});

navigate("/login");
};

return(
<div className="form-container">

<h2>Create Account</h2>

<form onSubmit={handleSubmit}>

<input
placeholder="Name"
onChange={(e)=>setName(e.target.value)}
/>

<input
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<button className="btn">Register</button>

</form>

<p style={{textAlign:"center",marginTop:"15px"}}>
Already you have an account? 
<Link to="/login" style={{color:"#2563eb",marginLeft:"5px"}}>
Login
</Link>
</p>


</div>
);
}

export default Register;