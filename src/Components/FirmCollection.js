import React, { useEffect, useState } from 'react';
import { API_URL } from './Api_Path';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { MoonLoader } from "react-spinners";
import './Styling/FirmCollection.css';

const FirmCollection = () => {
  const [data, setData] = useState([]);
  const [selectedregion,setSelectedregion]=useState('all');
  const navigate=useNavigate();
  useEffect(() => {
    axios.get(`${API_URL}/owner/allowners`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  const clickHandle=(id)=>{
    navigate(`/firm/${id}`)
  }
  const filterHandle=(region)=>{
    setSelectedregion(region);
  }

  return (
    <div className="content-section">
      <h3 className="section-title">Restaurants with Online Food Delivery</h3>
      <div className='filter-btn'>
        <button className='button' onClick={()=>filterHandle('all')}>All</button>
        <button className='button' onClick={()=>filterHandle('north-indian')}>North-Indian</button>
        <button className='button' onClick={()=>filterHandle('south-indian')}>South-Indian</button>
        <button className='button' onClick={()=>filterHandle('chinese')}>Chinese</button>
        <button className='button' onClick={()=>filterHandle('bakery')}>Bakery</button>
      </div>
      {data===null?<MoonLoader color="#005cc2" size={30} className='loader'/>
      :
      <div className="firm-grid">
        {data.map((owner) =>
          owner.firm.map((firm) => {
            if(selectedregion==='all' || firm.region.includes(selectedregion)){
            return(
            <div key={firm._id} className="firm-card" onClick={()=>clickHandle(firm._id)}>
              <img className="firm-image" src={firm.image} alt={firm.name} />
              <p className="firm-offer">{firm.offer} ₹</p>
              <h5 className="firm-name">{firm.name}</h5>
              <p className="firm-address">{firm.address}</p>
              <div className="firm-region">
                {firm.region.map((type) => (
                  <span key={type} className="badge">{type}</span>
                ))}
              </div>
            </div>
          )}
          return null;
        })
        )}
      </div>
      }
    </div>
  );
};

export default FirmCollection;
