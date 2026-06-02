const PortfolioItem = ({ item, onSelect }) => {
  return (
    <div className="col-md-6 col-lg-4 mb-5">
      <div className="portfolio-item mx-auto" onClick={onSelect}>
        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
          <div className="text-center text-white">
            <i className="fas fa-plus fa-3x"></i>
          </div>
        </div>
        <img className="img-fluid" src={item.img} alt={item.title} />
      </div>
    </div>
  );
};

export default PortfolioItem;