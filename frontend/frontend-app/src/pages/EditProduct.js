import React,{useState,useEffect} from "react";
import { useParams,useNavigate } from "react-router-dom";
import API from "../api";
import Navbar from "../components/Navbar";

function EditProduct(){

const {id} = useParams();
const navigate = useNavigate();

const [name,setName] = useState("");
const [description,setDescription] = useState("");
const [price,setPrice] = useState("");
const [category,setCategory] = useState("");

useEffect(()=>{
fetchProduct();
},[]);

const fetchProduct = async()=>{
const res = await API.get("/products");
const product = res.data.find(p=>p._id === id);

setName(product.name);
setDescription(product.description);
setPrice(product.price);
setCategory(product.category);
};

const handleSubmit = async(e)=>{

e.preventDefault();

await API.put(`/products/${id}`,{
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

<h2>Edit Product</h2>

<form onSubmit={handleSubmit}>

<input
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<input
value={description}
onChange={(e)=>setDescription(e.target.value)}
/>

<input
value={price}
onChange={(e)=>setPrice(e.target.value)}
/>

<input
value={category}
onChange={(e)=>setCategory(e.target.value)}
/>

<button className="btn">Update Product</button>

</form>

</div>

</div>

);

}

export default EditProduct;