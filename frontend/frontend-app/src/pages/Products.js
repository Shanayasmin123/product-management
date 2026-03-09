import React,{useEffect,useState} from "react";
import API from "../api";
import { Link,useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Products(){

const navigate = useNavigate();
const [products,setProducts] = useState([]);

const token = localStorage.getItem("token");
const role = token ? JSON.parse(atob(token.split(".")[1])).role : null;

useEffect(()=>{
fetchProducts();
},[]);

const fetchProducts = async()=>{
const res = await API.get("/products");
setProducts(res.data);
};

const deleteProduct = async(id)=>{
await API.delete("/products/"+id);
fetchProducts();
};

return(

<div>

<Navbar/>

<div className="products-container">

<div className="products-header">
<h2>Products</h2>

{role === "admin" && (
<Link to="/add">
<button className="add-btn">Add Product</button>
</Link>
)}

</div>

<div className="product-grid">

{products.map((p)=>(
<div className="product-card" key={p._id}>

<h3>{p.name}</h3>
<p>{p.description}</p>
<p className="price">₹ {p.price}</p>

{/* Admin buttons */}

{role === "admin" && (
<>
<button
className="delete-btn"
onClick={()=>deleteProduct(p._id)}
>
Delete
</button>

<button
className="edit-btn"
onClick={()=>navigate(`/edit/${p._id}`)}
>
Edit
</button>
</>
)}

{/* User view */}

{role === "user" && (
<p style={{color:"gray"}}>View only</p>
)}

</div>
))}

</div>

</div>

</div>

);

}

export default Products;