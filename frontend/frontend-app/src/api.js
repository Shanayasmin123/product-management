import axios from "axios";

const API = axios.create({
  baseURL:"https://product-backend-o7w9.onrender.com/api"
});

API.interceptors.request.use((req)=>{
  const token = localStorage.getItem("token");

  if(token){
    req.headers.Authorization = token;
  }

  return req;
});

export default API;