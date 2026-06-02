import { useState } from 'react';
import PortfolioItem from '../components/PortfolioItem';
import PortfolioModal from '../components/PortfolioModal';
import Divider from '../components/Divider';

// Make sure these paths match where you dumped your images
import cabin from '../assets/img/portfolio/cabin.png';
import cake from '../assets/img/portfolio/cake.png';
import circus from '../assets/img/portfolio/circus.png';
import game from '../assets/img/portfolio/game.png';
import safe from '../assets/img/portfolio/safe.png';
import submarine from '../assets/img/portfolio/submarine.png';

const portfolioData = [
  { id: 1, title: 'Log Cabin', img: cabin },
  { id: 2, title: 'Tasty Cake', img: cake },
  { id: 3, title: 'Circus Tent', img: circus },
  { id: 4, title: 'Controller', img: game },
  { id: 5, title: 'Locked Safe', img: safe },
  { id: 6, title: 'Submarine', img: submarine },
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
            <PortfolioItem 
              key={item.id} 
              item={item} 
              onSelect={() => setSelectedItem(item)} 
            />
          ))}
        </div>
      </div>
      
      {/* Modal renders conditionally based on state */}
      <PortfolioModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </section>
  );
};

export default Portfolio;