import MediaWrapper from './MediaWrapper';

const PortfolioItem = ({ item, onSelect }) => {
  return (
    <div className="col-md-6 col-lg-4 mb-5">
      <div className="portfolio-item mx-auto" onClick={onSelect}>
        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100" style={{ zIndex: 5 }}>
          <div className="text-center text-white">
            <i className="fas fa-plus fa-3x"></i>
          </div>
        </div>
        {/* pointerEvents: 'none' stops iframes from stealing the modal click trigger */}
        <div className="w-100" style={{ pointerEvents: 'none', aspectRatio: '4/3' }}>
          <MediaWrapper url={item.media[0]} className="w-100 h-100" style={{ objectFit: 'cover' }} />
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;