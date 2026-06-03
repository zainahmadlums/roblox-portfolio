import MediaWrapper from './MediaWrapper';

const PortfolioItem = ({ item, onSelect }) => {
  return (
    <div className="col-12 col-md-4">
      {/* position-relative ensures our absolute overlays stay inside the card */}
      <div className="portfolio-item mx-auto rounded-4 position-relative" onClick={onSelect}>
        
        {/* The Hover State Overlay (z-index: 5 so it sits on top of everything) */}
        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100 rounded-4" style={{ zIndex: 5 }}>
          <div className="text-center text-white fw-bold fs-4" style={{ letterSpacing: '2px' }}>
            OPEN DETAILS
          </div>
        </div>

        {/* The New Title Bar (z-index: 4 so the hover state covers it) */}
        <div 
          className="position-absolute bottom-0 start-0 w-100 py-3 px-4" 
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)', zIndex: 4 }}
        >
          {/* text-truncate prevents long titles from wrapping and breaking the bar height */}
          <h5 className="text-white mb-0 fw-bold text-truncate" style={{ letterSpacing: '1px' }}>
            {item.title}
          </h5>
        </div>
        
        {/* The Media */}
        <div className="w-100" style={{ pointerEvents: 'none', aspectRatio: '4/3' }}>
          <MediaWrapper url={item.media[0]} className="w-100 h-100 rounded-4" style={{ objectFit: 'cover' }} />
        </div>
        
      </div>
    </div>
  );
};

export default PortfolioItem;