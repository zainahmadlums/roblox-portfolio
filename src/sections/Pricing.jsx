import Divider from '../components/Divider';

const Pricing = () => {
  return (
    <section className="page-section bg-dark text-white mb-0" id="pricing">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-white mb-0">Workflow & Pricing</h2>
        <Divider light={true} />
        
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <p className="lead text-light">
              Compensation is always negotiable based on the scope and complexity of the system. I'm always looking for compelling projects and good opportunities.
              I'm mostly looking for payment in USD or Robux, but I can accept percentage for games I love; we can discuss it on a per-project basis.
            </p>
          </div>
        </div>

        <div className="row justify-content-center g-4 mb-5">
          <div className="col-md-6 col-lg-5">
            <div className="card bg-secondary text-white border-0 h-100 rounded-4 shadow-lg">
              <div className="card-body p-5 text-start">
                <div className="text-center mb-4">
                  <i className="fas fa-bolt fa-3x text-primary mb-3"></i>
                  <h3 className="fw-bold text-white">Small Projects</h3>
                </div>
                <ul className="list-unstyled text-light fs-5 mb-0">
                  <li className="mb-3"><i className="fas fa-check text-primary me-2"></i> Project is completed locally first</li>
                  <li className="mb-3"><i className="fas fa-check text-primary me-2"></i> Final product is showcased for approval</li>
                  <li className="mb-3"><i className="fas fa-check text-primary me-2"></i> The exchange is made post-verification</li>
                  <li><i className="fas fa-xmark text-danger me-2"></i> (No Team Create for small projects without upfront payment)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-5">
            <div className="card bg-secondary text-white border-0 h-100 rounded-4 shadow-lg">
              <div className="card-body p-5 text-start">
                <div className="text-center mb-4">
                  <i className="fas fa-layer-group fa-3x text-primary mb-3"></i>
                  <h3 className="fw-bold text-white">Large Projects</h3>
                </div>
                <ul className="list-unstyled text-light fs-5 mb-0">
                  <li className="mb-3"><i className="fas fa-check text-primary me-2"></i> Scope is divided into clear milestones</li>
                  <li className="mb-3"><i className="fas fa-check text-primary me-2"></i> Payment for each task is agreed upon</li>
                  <li className="mb-3"><i className="fas fa-check text-primary me-2"></i> Payment is processed sequentially upon completion of each task</li>
                  <li><i className="fas fa-check text-primary me-2"></i> Ensures mutual commitment and security</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center mt-5">
          <div className="col-lg-10 text-center">
            {/* Replaced the tiny muted text with this massive white bold text */}
            <p className="fs-3 text-white fw-bold">
              Don't hesitate to reach out. I am always open to answering any questions you have or discussing your game's requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;