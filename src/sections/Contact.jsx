import Divider from '../components/Divider';
// Import your custom downloaded icon here. If you used a .jpeg or .svg, change the extension.
import robloxIcon from '../assets/img/roblox.png'; 

const Contact = () => {
  return (
    <section className="page-section bg-primary text-white" id="contact">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-white mb-0">Contact Me</h2>
        <Divider light={true} />
        
        <div className="row justify-content-center mt-5 g-4">
          
          {/* Roblox Card */}
          <div className="col-md-6 col-lg-5">
            <a 
              href="https://www.roblox.com/users/667585188/profile" 
              target="_blank" 
              rel="noopener noreferrer"
              className="card bg-dark text-white border-0 h-100 rounded-4 shadow-lg text-decoration-none contact-card"
            >
              <div className="card-body p-4 d-flex align-items-center">
                {/* Ripped out FontAwesome, shoved your custom image in its place */}
                <img 
                  src={robloxIcon} 
                  alt="Roblox" 
                  style={{ width: '4.5rem', height: '4.5rem', objectFit: 'contain' }} 
                />
                <div className="ms-4 text-start">
                  <h3 className="fw-bold mb-1 text-white">tefupops</h3>
                  <p className="text-white mb-0 fs-5">@ProfessionalPlayer60</p>
                </div>
              </div>
            </a>
          </div>

          {/* Discord Card */}
          <div className="col-md-6 col-lg-5">
            <a 
              href="https://discord.com/users/491937683828899851" 
              target="_blank" 
              rel="noopener noreferrer"
              className="card bg-dark text-white border-0 h-100 rounded-4 shadow-lg text-decoration-none contact-card"
            >
              <div className="card-body p-4 d-flex align-items-center">
                <i className="fa-brands fa-discord text-white" style={{ fontSize: '4.5rem' }}></i>
                <div className="ms-4 text-start">
                  <h3 className="fw-bold mb-1 text-white">tefupops</h3>
                  <p className="text-white mb-0 fs-5">@tefupops</p>
                </div>
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;