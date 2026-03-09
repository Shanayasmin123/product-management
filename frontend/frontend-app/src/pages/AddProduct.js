import React,{useState} from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function AddProduct(){

const [name,setName] = useState("");
const [description,setDescription] = useState("");
const [price,setPrice] = useState("");
const [category,setCategory] = useState("");

const navigate = useNavigate();

const handleSubmit = async(e)=>{

e.preventDefault();

await API.post("/products",{
name,
description,
price,
category
});

navigate("/products");

};

return(

<div>

<Navbar/>

<div className="form-container">

<h2>Add Product</h2>

<form onSubmit={handleSubmit}>

<input placeholder="Name"
onChange={(e)=>setName(e.target.value)}
/>

<input placeholder="Description"
onChange={(e)=>setDescription(e.target.value)}
/>

<input placeholder="Price"
onChange={(e)=>setPrice(e.target.value)}
/>

<input placeholder="Category"
onChange={(e)=>setCategory(e.target.value)}
/>

<button className="btn">Add Product</button>

</form>

</div>

</div>

);

}

export default AddProduct;