import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";

import "./styles/style.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";

function App(){

return(

<BrowserRouter>

<Routes>

<Route path="/" element={<Login/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/register" element={<Register/>}/>
<Route path="/products" element={<Products/>}/>
<Route path="/add" element={<AddProduct/>}/>
<Route path="/edit/:id" element={<EditProduct/>}/>

</Routes>

</BrowserRouter>

);

}

export default App;