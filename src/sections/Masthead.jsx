import Divider from '../components/Divider';
import avatar from '../assets/img/avataaars.svg'; // Assuming you actually put the image here

const Masthead = () => {
  return (
    <header className="masthead bg-primary text-white text-center" style={{ paddingTop: '8rem', paddingBottom: '6rem' }}>
      <div className="container d-flex align-items-center flex-column">
        <img className="masthead-avatar mb-5" src={avatar} alt="Avatar" style={{ width: '15rem' }} />
        <h1 className="masthead-heading text-uppercase mb-0 fs-1 fw-bold">Dark Portfolio</h1>
        <Divider light={true} />
        <p className="masthead-subheading font-weight-light mb-0 fs-4">
          Graphic Artist - Web Designer - Illustrator
        </p>
      </div>
    </header>
  );
};

export default Masthead;