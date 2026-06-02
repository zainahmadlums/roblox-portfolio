import Divider from '../components/Divider';

const About = () => {
  return (
    <section className="page-section bg-primary text-white mb-0" id="about">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-white mb-0">About</h2>
        <Divider light={true} />
        <div className="row">
          <div className="col-lg-4 ms-auto">
            <p className="lead">
              Freelancer is a free bootstrap theme created by Start Bootstrap. We ripped out the garbage, made it modular with React, and slapped a dark theme on it because we aren't savages.
            </p>
          </div>
          <div className="col-lg-4 me-auto">
            <p className="lead">
              You can create your own custom avatar for the masthead, change the icon in the dividers, and actually build real components instead of copy-pasting HTML.
            </p>
          </div>
        </div>
        <div className="text-center mt-4">
          <a className="btn btn-xl btn-outline-light py-3 px-4 fs-5 rounded" href="#!">
            <i className="fas fa-download me-2"></i>
            Free Download!
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;