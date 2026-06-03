import { useState, useEffect } from 'react';
import Divider from './Divider';
import Carousel from './Carousel';

const PortfolioModal = ({ item, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);

  // Reset the closing state if the modal gets reopened
  useEffect(() => {
    if (item) setIsClosing(false);
  }, [item]);

  if (!item) return null;

  // Intercept the close action to play the animation first
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose(); // Actually unmount it after 300ms
    }, 300); 
  };

  return (
    <>
      <div 
        className={`modal-backdrop fade show ${isClosing ? 'backdrop-exit' : ''}`} 
        style={{ zIndex: 1040, transition: 'opacity 0.3s ease-out' }}
      ></div>
      
      <div className="modal fade show d-block" tabIndex="-1" style={{ zIndex: 1055 }} onClick={handleClose}>
        <div 
          className={`modal-dialog modal-xl modal-dialog-centered ${isClosing ? 'modal-fade-exit' : 'modal-fade-enter'}`} 
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-content bg-secondary text-white border-0 shadow-lg">
            <div className="modal-header border-0 pb-0">
              <button 
                className="btn-close btn-close-white" 
                type="button" 
                onClick={handleClose} 
                aria-label="Close"
              ></button>
            </div>
            
            <div className="modal-body text-center pb-5 pt-0">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-11">
                    <h2 className="portfolio-modal-title text-uppercase text-white mb-0 fs-2">{item.title}</h2>
                    <Divider light={true} />
                    
                    <Carousel media={item.media} />

                    <p className="mb-4 mt-4 text-light fs-5">
                      {item.description || "No description provided."}
                    </p>
                    <button className="btn btn-primary btn-lg px-4 py-2" onClick={handleClose}>
                      <i className="fas fa-xmark fa-fw me-2"></i>
                      Close Window
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioModal;