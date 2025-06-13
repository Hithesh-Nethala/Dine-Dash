import React from 'react'
import './Styling/Navbar.css'
const Navbar = () => {
  return (
    <div className='nav d-flex flex-row justify-content-between'>
        <h2>DineDash</h2>
        <input type='text' placeholder='Search...'/>
        <div>
            <button className='btn btn-outline-primary'>Login</button>
            <button className='btn btn-outline-primary ms-2'>SignUp</button>
        </div>
    </div>
  )
}

export default Navbar