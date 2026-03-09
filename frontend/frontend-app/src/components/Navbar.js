import React from "react";
import { Link } from "react-router-dom";

function Navbar(){

const logout = ()=>{
localStorage.removeItem("token");
window.location.href="/login";
};

return(

<div className="navbar">

<h2>Product Manager</h2>

<div className="nav-links">
<button className="logout-btn" onClick={logout}>Logout</button>
</div>

</div>

);

}

export default Navbar;