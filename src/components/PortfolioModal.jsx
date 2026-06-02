import Divider from './Divider';

const PortfolioModal = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <>
      <div className="modal-backdrop fade show" style={{ zIndex: 1040 }}></div>
      <div 
        className="modal fade show d-block" 
        tabIndex="-1" 
        style={{ zIndex: 1055 }} 
        onClick={onClose}
      >
        <div className="modal-dialog modal-xl" onClick={(e) => e.stopPropagation()}>
          <div className="modal-content bg-secondary text-white border-0">
            <div className="modal-header border-0 pb-0">
              <button 
                className="btn-close btn-close-white" 
                type="button" 
                onClick={onClose} 
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center pb-5">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <h2 className="portfolio-modal-title text-uppercase mb-0">{item.title}</h2>
                    <Divider light={true} />
                    <img className="img-fluid rounded mb-5" src={item.img} alt={item.title} />
                    <p className="mb-4 text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.
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