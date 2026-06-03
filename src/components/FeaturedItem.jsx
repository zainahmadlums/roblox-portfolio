import { useState, useEffect, useRef } from 'react';
import Carousel from './Carousel';

const FeaturedItem = ({ item, imageRight }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(domRef.current);
        }
      },
      // rootMargin: '0px 0px -30% 0px' forces the browser to ignore the bottom 30% of the viewport.
      // It won't trigger the animation until the top of the element is pushed decently high up the screen.
      { threshold: 0, rootMargin: '0px 0px -30% 0px' } 
    );

    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={domRef} 
      // Swapped g-3 for g-4 to give a tiny bit more horizontal breathing room between the carousel and the fatter card
      className={`row align-items-center justify-content-center mb-2 g-4 ${isVisible ? 'fade-down-enter' : 'opacity-0'}`}
    >
      <div className={`col-12 col-lg-6 ${imageRight ? 'order-lg-2' : 'order-lg-1'}`}>
        <Carousel media={item.media} />
      </div>

      <div className={`col-12 col-lg-6 ${imageRight ? 'order-lg-1 text-lg-end' : 'order-lg-2 text-lg-start'} text-center`}>
        {/* Added d-flex flex-column justify-content-center and a 350px min-height to make it vertically larger */}
        <div 
          className="card bg-secondary text-white border-0 shadow-lg rounded-4 p-4 p-lg-5 featured-floating-card animate-float d-flex flex-column justify-content-center" 
          style={{ minHeight: '350px' }}
        >
          <span className="text-primary fw-bold text-uppercase mb-3 d-block small" style={{ letterSpacing: '2px' }}>
            Featured Project
          </span>
          <h3 className="h1 fw-bold mb-4 text-white text-uppercase">{item.title}</h3>
          <p className="lead text-light mb-0 fs-5">{item.description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedItem;