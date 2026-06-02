import Divider from './Divider';
import Carousel from './Carousel';

const PortfolioModal = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <>
      <div className="modal-backdrop fade show" style={{ zIndex: 1040 }}></div>
      <div className="modal fade show d-block" tabIndex="-1" style={{ zIndex: 1055 }} onClick={onClose}>
        <div className="modal-dialog modal-lg modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
          <div className="modal-content bg-secondary text-white border-0 shadow-lg">
            <div className="modal-header border-0 pb-0">
              <button className="btn-close btn-close-white" type="button" onClick={onClose} aria-label="Close"></button>
            </div>
            <div className="modal-body text-center pb-4 pt-0">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <h2 className="portfolio-modal-title text-uppercase text-white mb-0 fs-3">{item.title}</h2>
                    <Divider light={true} />
                    
                    {/* Render the new interactive media carousel */}
                    <Carousel media={item.media} />

                    <p className="mb-4 text-light fs-6">
                      Description for {item.title}. The carousel above seamlessly integrates standard images, Gyazo links, and YouTube embeds without completely shattering the DOM.
                    </p>
                    <button className="btn btn-primary px-4 py-2" onClick={onClose}>
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