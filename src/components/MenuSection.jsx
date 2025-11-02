import React from 'react';
import MenuItem from './MenuItem';
import './MenuSection.css';

const MenuSection = ({ title, items, icon, photosOnly = false, fullWidth = false, imageGridOnly = false }) => {
  // Separate items into text-only (no image) and items with images
  const textOnlyItems = items.filter(item => !item.image);
  const imageItems = items.filter(item => item.image);

  return (
    <section className={`menu-section ${fullWidth ? 'full-width' : ''}`}>
      <div className="section-header">
        {icon && <span className="section-icon">{icon}</span>}
        <h2 className="section-title">{title}</h2>
      </div>
      
      {/* Render text-only items first if photosOnly mode */}
      {photosOnly && textOnlyItems.length > 0 && !imageGridOnly && (
        <div className="text-items">
          {textOnlyItems.map((item, index) => (
            <MenuItem key={`text-${index}`} item={item} photosOnly={false} />
          ))}
        </div>
      )}
      
      {/* Render full width image or image grid or regular grid */}
      {fullWidth && imageItems.length > 0 ? (
        <div className="full-width-image">
          {imageItems.map((item, index) => (
            <img key={index} src={item.image} alt={item.name} />
          ))}
        </div>
      ) : imageGridOnly && imageItems.length > 0 ? (
        <div className="image-grid-only">
          {imageItems.map((item, index) => (
            <div key={index} className="image-grid-item">
              <img src={item.image} alt={item.name || `Image ${index + 1}`} />
            </div>
          ))}
        </div>
      ) : (
        <div className="menu-grid">
          {(photosOnly ? imageItems : items).map((item, index) => (
            <MenuItem key={index} item={item} photosOnly={photosOnly} />
          ))}
        </div>
      )}
    </section>
  );
};

export default MenuSection;
