import React from 'react';
import './MenuItem.css';

const MenuItem = ({ item, photosOnly = false }) => {
  return (
    <div className={`menu-item ${photosOnly ? 'photos-only' : ''}`}>
      {item.image && (
        <div className="menu-item-image">
          <img 
            src={item.image} 
            alt={item.name}
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentElement.style.display = 'none';
            }}
          />
        </div>
      )}
      {!photosOnly && (
        <div className="menu-item-content">
          <div className="menu-item-header">
            <h3 className="menu-item-name">{item.name}</h3>
            <span className="menu-item-price">{item.price}</span>
          </div>
          <p className="menu-item-description">{item.description}</p>
        </div>
      )}
    </div>
  );
};

export default MenuItem;
