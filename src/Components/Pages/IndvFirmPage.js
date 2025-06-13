import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { API_URL } from '../Api_Path';
import { useEffect,useState } from 'react';
import '../Styling/IndvFirmPage.css'
const IndvFirmPage = () => {
    const {id}=useParams();
    const [name,setName]=useState(null);
    const [products,setProducts]=useState(null)
    useEffect(()=>{
        axios.get(`${API_URL}/firm/indvproducts/${id}`)
        .then((res)=>{setName(res.data.firmname);setProducts(res.data.products);console.log(res.data.products)})
        .catch((err)=>console.log(err))
    },[])
  return (
    products &&
    <div className='indv-cont'>
        <h3 className='restaurant-name'>{name}</h3>
        <div>
            {products.map((item,index)=>{return(
                <div key={index} className='prod-cont'>
                    <div>
                        <h4 className='prod-name'>{item.name}</h4>
                        <p className='prod-desc'>{item.description}</p>
                        <p className="prod-price">₹{item.price}</p>
                    </div>
                    <div className='d-flex flex-column align-items-center'>
                        <img src={item.image} className='prod-image'/>
                        <button className='prod-btn'>Add</button>
                    </div>
                </div>
            )})}
        </div>
    </div>
  )
}

export default IndvFirmPage