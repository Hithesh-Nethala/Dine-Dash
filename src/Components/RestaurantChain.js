import React from 'react'
import { useEffect ,useState} from 'react'
import axios from 'axios'
import { API_URL } from './Api_Path'
import './Styling/RestaurantChain.css'
const RestaurantChain = () => {
    const [data,setData]=useState(null);
    useEffect(()=>{
        axios.get(`${API_URL}/owner/allowners`)
        .then((res)=>setData(res.data))
        .catch((err)=>console.log(err))
    },[])
    // console.log(data)
    const clickHandle=(direction)=>{
        const gallery=document.getElementById('chainGallery')
        const scrollAmount=300;
        if(direction==='left'){
            gallery.scrollTo({
                left:gallery.scrollLeft-scrollAmount,
                behavior:'smooth'
            })
        }
        if(direction==='right'){
            gallery.scrollTo({
                left:gallery.scrollLeft+scrollAmount,
                behavior:'smooth'
            })
        }
    }
  return (
    <div className='chain-cont'>
        <div className='d-flex flex-row justify-content-between'>
        <h3 className='chain-h3'>Top-Restaurant Chains</h3>
        <div><i className="fa-solid fa-arrow-left me-3" onClick={()=>clickHandle('left')}></i>
        <i className="fa-solid fa-arrow-right me-1" onClick={()=>clickHandle('right')}></i></div>
        </div>
        <div className='chain-item' id='chainGallery' >
        {data && data.map((item_firm,index)=>{
            return(
                <div key={index}>
                    {item_firm.firm.map((item,index)=>{
                        return(
                            <div key={index} className='chain-unit d-flex flex-column align-items-center'>
                                <img className='chain-images' src={item.image} alt={item.name}/> 
                                <p className='chain-p'>{item.name}</p>
                            </div>
                        )
                    })}
                </div>
            )
        })}
        </div>
    </div>
  )
}

export default RestaurantChain