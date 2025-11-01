import React from 'react';
import MenuItem from './MenuItem';
import './MenuSection.css';

const MenuSection = ({ title, items, icon }) => {
  return (
    <section className="menu-section">
      <div className="section-header">
        {icon && <span className="section-icon">{icon}</span>}
        <h2 className="section-title">{title}</h2>
      </div>
      <div className="menu-grid">
        {items.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default MenuSection;
