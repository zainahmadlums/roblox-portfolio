import { useState, useEffect, useRef } from 'react';

const AnimatedCounter = ({ target, label, prefix = "", suffix = "+" }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const duration = 2000; // 2 seconds
          const increment = target / (duration / 16); // 60fps

          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.ceil(start));
            }
          }, 16);
          
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [target]);

  return (
    <div className="text-center" ref={counterRef}>
      <h3 className="display-4 fw-bold text-white mb-2">
        {prefix}{count}{suffix}
      </h3>
      {/* Changed text-muted to text-light so you can actually read it */}
      <p className="text-light fs-5 text-uppercase" style={{ letterSpacing: '2px' }}>
        {label}
      </p>
    </div>
  );
};

export default AnimatedCounter;