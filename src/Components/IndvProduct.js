import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { API_URL } from './Api_Path';
import { MoonLoader } from "react-spinners";
import './Styling/IndvProduct.css';

const IndvProduct = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const ids = id.split(',');
    const fetchProducts = async () => {
      try {
        const responses = await Promise.all(
          ids.map((itemId) =>
            axios.get(`${API_URL}/product/indv_product/${itemId}`)
          )
        );
        const productData = responses.map((res) => res.data);
        setProducts(productData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    if (id) fetchProducts();
  }, [id]);

  return (
    products===null?<MoonLoader color="#005cc2" size={30} className='moonloader'/>:
    <div className="indv-product content-section">
      {products.map((product) => (
        <div key={product._id} className="product-card">
          <img src={product.image} alt={product.name} className="product-image" />
          <div className="product-details-row">
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">₹ {product.price}</p>
              <p className="product-description">{product.description}</p>
            </div>
            <div className="product-actions">
              <button className="add-button">ADD</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IndvProduct;
