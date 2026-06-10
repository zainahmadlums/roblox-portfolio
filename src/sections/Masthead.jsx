// import profilePic from '../assets/img/profile.png';
const profilePic = `${import.meta.env.BASE_URL}profile.png`;

const Masthead = () => {
  return (
    <header className="masthead bg-primary text-white" style={{ paddingTop: '10rem', paddingBottom: '7rem' }}>
      <div className="container">
        <div className="row align-items-center justify-content-center">
          
          {/* Left Side: Floating Profile Picture */}
          <div className="col-lg-5 mb-5 mb-lg-0 text-center">
            <div className="floating-frame d-inline-block p-3 bg-dark rounded-4 shadow-lg position-relative">
              <img 
                className="img-fluid rounded-3" 
                src={profilePic} 
                alt="tefupops" 
                /* Bumped from 22rem to 26rem so it eats up your precious empty space */
                style={{ width: '26rem', height: '26rem', objectFit: 'cover' }} 
              />
            </div>
          </div>

          {/* Right Side: Text & Details */}
          <div className="col-lg-6 text-center text-lg-start ms-lg-5">
            <h1 className="masthead-heading text-uppercase mb-0 display-3 fw-bold">tefupops</h1>
            
            {/* Custom responsive divider */}
            <div className="d-flex justify-content-center justify-content-lg-start mb-4 mt-3">
              <div className="bg-white rounded" style={{ width: '80px', height: '4px' }}></div>
              <div className="text-white mx-3 fs-3"><i className="fas fa-star"></i></div>
              <div className="bg-white rounded" style={{ width: '80px', height: '4px' }}></div>
            </div>

            {/* Bumped to fs-2, added top margin mt-5 */}
            <ul className="list-unstyled fs-2 fw-light mt-5">
              <li className="mb-4">
                {/* Changed text-dark to text-white, increased spacing */}
                <i className="fas fa-code text-white me-4" style={{ width: '35px' }}></i> 
                Scripter
              </li>
              <li className="mb-4">
                <i className="fas fa-desktop text-white me-4" style={{ width: '35px' }}></i> 
                Interface
              </li>
              <li className="mb-0">
                <i className="fas fa-film text-white me-4" style={{ width: '35px' }}></i> 
                Animations
              </li>
            </ul>
          </div>
          
        </div>
      </div>
    </header>
  );
};

export default Masthead;