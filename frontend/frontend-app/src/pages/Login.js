import React,{useState} from "react";
import API from "../api";
import { useNavigate, Link } from "react-router-dom";

function Login(){

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const navigate = useNavigate();

const handleSubmit = async(e)=>{

e.preventDefault();

const res = await API.post("/auth/login",{
email,
password
});

localStorage.setItem("token",res.data.token);

navigate("/products");

};

return(

<div className="form-container">

<h2>Login</h2>

<form onSubmit={handleSubmit}>

<input
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<button className="btn">Login</button>

</form>

<p style={{textAlign:"center",marginTop:"15px"}}>
Don't have an account? 
<Link to="/register" style={{color:"#2563eb",marginLeft:"5px"}}>
Register
</Link>
</p>

</div>

);

}

export default Login;