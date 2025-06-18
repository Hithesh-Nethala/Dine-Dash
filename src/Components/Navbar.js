import React from 'react'
import './Styling/Navbar.css'
import { useState } from 'react'
import { API_URL } from './Api_Path'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Navbar = () => {
  const [item,setItem]=useState(null);
  const navigate=useNavigate();
  const submitHandle=(e)=>{
    e.preventDefault();
    axios.get(`${API_URL}/product/indv/${item}`)
    .then((res)=>{
      if(res.data){
        navigate(`/product/${res.data}`)
      }
    })
    .catch((err)=>console.log(err))
    
  }
  return (
    <div className='nav'>
        <h2>DineDash</h2>
        <div>
        <form className='d-flex flex-row align-items-center' onSubmit={submitHandle}>
          <input type='text' placeholder='Search...' onChange={(e)=>setItem(e.target.value.toLowerCase())}/>
          <button className='btn btn-secondary' type='submit'>Search</button>
        </form>
       </div>
        <div>
            <button className='btn btn-outline-primary'>Login</button>
            <button className='btn btn-outline-primary ms-2'>SignUp</button>
        </div>
    </div>
  )
}

export default Navbar