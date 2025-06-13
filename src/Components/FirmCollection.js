import React, { useEffect, useState } from 'react';
import { API_URL } from './Api_Path';
import axios from 'axios';
import './Styling/FirmCollection.css';
import { useNavigate } from 'react-router-dom';

const FirmCollection = () => {
  const [data, setData] = useState([]);
  const [selectedregion, setSelectedregion] = useState('all');
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API_URL}/owner/allowners`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const clickHandle = (id) => {
    console.log(id);
    navigate(`/firm/${id}`);
  };

  const filterHandle = (region) => {
    setSelectedregion(region);
  };

  return (
    <div className="firm-collection container">
      <h3 className="section-title mb-4">Restaurants with Online Food Delivery</h3>
      <div className='filter-btn'>
        <button className='button' onClick={() => filterHandle('all')}>All</button>
        <button className='button' onClick={() => filterHandle('north-indian')}>North-Indian</button>
        <button className='button' onClick={() => filterHandle('south-indian')}>South-Indian</button>
        <button className='button' onClick={() => filterHandle('bakery')}>Bakery</button>
      </div>
      <div className="row">
        {data &&
          data.map((owner) =>
            owner.firm.map((firm) => {
              if (selectedregion === 'all' || firm.region.includes(selectedregion)) {
                return (
                  <div key={firm._id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                    <div className="firm-card shadow-sm" onClick={() => clickHandle(firm._id)}>
                      <img className="firm-image mb-2" src={firm.image} alt={firm.name} />
                      <p className="firm-offer">{firm.offer}₹</p>
                      <h5 className="firm-name">{firm.name}</h5>
                      <p className="firm-address">{firm.address}</p>
                      <div className="firm-region">
                        {firm.region.map((type) => (
                          <span key={type} className="badge bg-secondary me-1">
                            {type}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }
              return null; // Return null if the condition is not met
            })
          )}
      </div>
    </div>
  );
};

export default FirmCollection;
