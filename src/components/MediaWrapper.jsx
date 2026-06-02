import { useState, useEffect } from 'react';

const MediaWrapper = ({ url, className = "", style = {} }) => {
  const [mediaData, setMediaData] = useState({ type: null, src: null });

  useEffect(() => {
    if (!url) return;

    // 1. YouTube Match
    const ytMatch = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i);
    if (ytMatch && ytMatch[1]) {
      setMediaData({ type: 'youtube', src: `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=0` });
      return;
    }

    // 2. Gyazo Page Match (Intercept and use oEmbed API)
    const gyazoMatch = url.match(/gyazo\.com\/([a-z0-9]{32})/i);
    if (gyazoMatch && !url.includes('thumb.gyazo.com') && !url.includes('i.gyazo.com')) {
      fetch(`https://api.gyazo.com/api/oembed?url=${url}`)
        .then((res) => res.json())
        .then((data) => {
          if (data && data.url) {
            // Gyazo API successfully returned the raw .png or .gif
            setMediaData({ type: 'image', src: data.url });
          } else {
            // Fallback just in case their API acts up
            setMediaData({ type: 'image', src: `https://i.gyazo.com/${gyazoMatch[1]}.png` });
          }
        })
        .catch(() => {
          // Network failure fallback
          setMediaData({ type: 'image', src: `https://i.gyazo.com/${gyazoMatch[1]}.png` });
        });
      return;
    }

    // 3. Fallback for direct images and already working thumb.gyazo links
    setMediaData({ type: 'image', src: url });
  }, [url]);

  // Loading state while the API resolves the link
  if (!mediaData.src) {
    return (
      <div className={`d-flex justify-content-center align-items-center ${className}`} style={{ ...style, backgroundColor: '#111' }}>
        <div className="spinner-border text-primary" role="status"></div>
      </div>
    );
  }

  if (mediaData.type === 'youtube') {
    return (
      <iframe
        className={className}
        style={{ ...style, border: 'none' }}
        src={mediaData.src}
        allowFullScreen
        title="YouTube Media"
      ></iframe>
    );
  }

  // Render the resolved image or GIF
  return <img src={mediaData.src} className={className} style={style} alt="Portfolio Media" />;
};

export default MediaWrapper;