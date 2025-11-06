import React from 'react';
import MenuItem from './MenuItem';
import './MenuSection.css';

const MenuSection = ({ title, items, icon, photosOnly = false, fullWidth = false, imageGridOnly = false, orderText }) => {
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
            <MenuItem key={`text-${index}`} item={item} photosOnly={false} orderText={orderText} />
          ))}
        </div>
      )}
      
      {/* Render full width image or image grid or regular grid */}
      {fullWidth && imageItems.length > 0 ? (
        <div className="full-width-image">
          {imageItems.map((item, index) => {
            const handleWhatsAppOrder = () => {
              const message = `I want to order kaak`;
              const whatsappUrl = `https://wa.me/96170991598?text=${encodeURIComponent(message)}`;
              window.open(whatsappUrl, '_blank');
            };
            
            return (
              <div key={index} className="full-width-container">
                <img src={item.image} alt={item.name} />
                <button 
                  className="full-width-order-button"
                  onClick={handleWhatsAppOrder}
                  aria-label="Order kaak via WhatsApp"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="whatsapp-icon-button">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Order Kaak
                </button>
              </div>
            );
          })}
        </div>
      ) : imageGridOnly && imageItems.length > 0 ? (
        <div className="image-grid-only">
          {imageItems.map((item, index) => {
            const handleWhatsAppOrder = () => {
              const message = `Hello! I would like to order: ${item.name || title + ' Item ' + (index + 1)}`;
              const whatsappUrl = `https://wa.me/96170991598?text=${encodeURIComponent(message)}`;
              window.open(whatsappUrl, '_blank');
            };
            
            return (
              <div key={index} className="image-grid-item">
                <img src={item.image} alt={item.name || `Image ${index + 1}`} />
                <button 
                  className="image-order-button"
                  onClick={handleWhatsAppOrder}
                  aria-label={`Order ${item.name || 'this item'} via WhatsApp`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="whatsapp-icon-small">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Order
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="menu-grid">
          {(photosOnly ? imageItems : items).map((item, index) => (
            <MenuItem key={index} item={item} photosOnly={photosOnly} orderText={orderText} />
          ))}
        </div>
      )}
    </section>
  );
};

export default MenuSection;
