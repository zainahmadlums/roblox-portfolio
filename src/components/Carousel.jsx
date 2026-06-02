import { useState } from 'react';
import MediaWrapper from './MediaWrapper';

const Carousel = ({ media }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!media || media.length === 0) return null;
  const hasMultiple = media.length > 1;

  const next = () => setCurrentIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1));
  const prev = () => setCurrentIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));

  const getSlideClass = (index) => {
    if (!hasMultiple) return 'carousel-slide-active';
    if (index === currentIndex) return 'carousel-slide-active';

    const length = media.length;
    // Edge case handling for arrays with exactly 2 items
    if (length === 2) {
      if (currentIndex === 0 && index === 1) return 'carousel-slide-next';
      if (currentIndex === 1 && index === 0) return 'carousel-slide-prev';
    }

    // Circular distance calculation
    let offset = index - currentIndex;
    if (offset < -Math.floor(length / 2)) offset += length;
    if (offset > Math.floor(length / 2)) offset -= length;

    if (offset === -1) return 'carousel-slide-prev';
    if (offset === 1) return 'carousel-slide-next';
    return 'carousel-slide-hidden';
  };

  return (
    <div className="position-relative overflow-hidden w-100 bg-dark rounded shadow mb-3" style={{ height: '40vh', minHeight: '300px' }}>
      <div className="d-flex justify-content-center align-items-center h-100 w-100 position-relative">
        {media.map((url, index) => {
          const slideClass = getSlideClass(index);
          return (
            <div 
              key={index} 
              className={`carousel-slide-item ${slideClass}`}
              // Allow users to click the faded prev/next items to navigate to them
              onClick={() => {
                if (slideClass === 'carousel-slide-prev') prev();
                if (slideClass === 'carousel-slide-next') next();
              }}
            >
              <MediaWrapper url={url} className="w-100 h-100 shadow-lg rounded" style={{ objectFit: 'contain' }} />
            </div>
          );
        })}
      </div>

      {hasMultiple && (
        <>
          <button className="carousel-control-prev" type="button" onClick={prev} style={{ zIndex: 10, width: '10%' }}>
            <span className="carousel-control-prev-icon bg-dark rounded-circle p-3 shadow" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" onClick={next} style={{ zIndex: 10, width: '10%' }}>
            <span className="carousel-control-next-icon bg-dark rounded-circle p-3 shadow" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </>
      )}
    </div>
  );
};

export default Carousel;