import { useState } from 'react';

const MediaWrapper = ({ url, className = "", style = {} }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  if (!url) return null;

  // 1. YouTube Match
  const ytMatch = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i);

  // Extract objectFit so we can apply it directly to the media, keeping the container clean
  const { objectFit, ...containerStyle } = style;

  return (
    <div 
      className={`position-relative overflow-hidden ${className}`} 
      style={{ ...containerStyle, backgroundColor: '#1a1f24' }} // Contrasting dark slate background
    >
      {/* The Loading Spinner - Sits in the absolute center until the media loads */}
      {!isLoaded && (
        <div className="position-absolute top-50 start-50 translate-middle" style={{ zIndex: 1 }}>
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {/* 2. Render YouTube or standard Image */}
      {ytMatch && ytMatch[1] ? (
        <iframe
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ border: 'none', opacity: isLoaded ? 1 : 0, transition: 'opacity 0.3s ease' }}
          src={`https://www.youtube.com/embed/${ytMatch[1]}?autoplay=0`}
          allowFullScreen
          title="YouTube Media"
          onLoad={() => setIsLoaded(true)}
          loading="lazy" // Native browser lazy loading. Magic.
        ></iframe>
      ) : (
        <img 
          src={url} 
          className="position-absolute top-0 start-0 w-100 h-100" 
          style={{ objectFit: objectFit || 'cover', opacity: isLoaded ? 1 : 0, transition: 'opacity 0.3s ease' }} 
          alt="Portfolio Media" 
          onLoad={() => setIsLoaded(true)}
          loading="lazy" // Native browser lazy loading.
        />
      )}
    </div>
  );
};

export default MediaWrapper;