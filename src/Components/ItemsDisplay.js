import React from 'react';
import { itemData } from './ImageData';
import './Styling/ItemsDisplay.css';

const ItemsDisplay = () => {
  return (
    <div className="itemdisplay">
      {itemData.map((item, index) => (
        <div key={index} className="item">
          <img className="image" src={item.item_img} alt={`item-${index}`} />
        </div>
      ))}
    </div>
  );
};

export default ItemsDisplay;
