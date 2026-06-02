const Footer = () => {
  return (
    <>
      <footer className="footer text-center bg-secondary py-5 text-white">
        <div className="container py-4">
          <div className="row">
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4 fw-bold">Location</h4>
              <p className="lead mb-0">
                2215 John Daniel Drive<br />Clark, MO 65243
              </p>
            </div>
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4 fw-bold">Around the Web</h4>
              <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-facebook-f"></i></a>
              <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-twitter"></i></a>
              <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-linkedin-in"></i></a>
              <a className="btn btn-outline-light btn-social mx-1" href="#!"><i className="fab fa-fw fa-dribbble"></i></a>
            </div>
            <div className="col-lg-4">
              <h4 className="text-uppercase mb-4 fw-bold">About Freelancer</h4>
              <p className="lead mb-0">
                Freelance is a free to use, MIT licensed Bootstrap theme. Now vastly improved by me.
              </p>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright py-4 text-center text-white" style={{ backgroundColor: '#111' }}>
        <div className="container"><small>Copyright &copy; Your Website 2026</small></div>
      </div>
    </>
  );
};

export default Footer;