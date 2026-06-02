import { useState } from 'react';
import PortfolioItem from '../components/PortfolioItem';
import PortfolioModal from '../components/PortfolioModal';
import Divider from '../components/Divider';

const portfolioData = [
  { 
    id: 1, 
    title: 'Gyazo Tests', 
    media: [
      'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      'https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfYzIxZDNkOWU1YjU5MmNmZTkzN2Y3MTkwYjQxZmNlZjEifQ.Nuo4wZR-BYJ0uv5KwPfmg3tmV2iHMnuELUFroN9Mt8E-gif.gif',
      'https://gyazo.com/2b677344cb82c8b2dfa941eaed4d1299',
      'https://www.youtube.com/watch?v=dQw4w9WgXcQ' // You're welcome
    ] 
  },
  { 
    id: 2, 
    title: 'Single Gyazo Player', 
    media: ['https://gyazo.com/2b677344cb82c8b2dfa941eaed4d1299',
      'https://www.youtube.com/watch?v=dQw4w9WgXcQ'] // You're welcome] 
  },
  { 
    id: 3, 
    title: 'Single Direct Image', 
    media: ['https://thumb.gyazo.com/thumb/1200_w/eyJhbGciOiJIUzI1NiJ9.eyJpbWciOiJfYzIxZDNkOWU1YjU5MmNmZTkzN2Y3MTkwYjQxZmNlZjEifQ.Nuo4wZR-BYJ0uv5KwPfmg3tmV2iHMnuELUFroN9Mt8E-gif.gif'] 
  }
];

const Portfolio = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <section className="page-section portfolio bg-dark text-white" id="portfolio">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-white mb-0">Portfolio</h2>
        <Divider light={true} />
        <div className="row justify-content-center">
          {portfolioData.map((item) => (
            <PortfolioItem key={item.id} item={item} onSelect={() => setSelectedItem(item)} />
          ))}
        </div>
      </div>
      
      <PortfolioModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </section>
  );
};

export default Portfolio;