import React from 'react';
import { itemData } from './ImageData';
import './Styling/ItemsDisplay.css';

const ItemsDisplay = () => {
  return (
    <div className="items-display content-section">
      {itemData.map((item, index) => (
        <img
          key={index}
          className="item-image"
          src={item.item_img}
          alt={`item-${index}`}
        />
      ))}
    </div>
  );
};

export default ItemsDisplay;
