import Divider from '../components/Divider';

const Contact = () => {
  return (
    <section className="page-section bg-dark text-white" id="contact">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-white mb-0">Contact Me</h2>
        <Divider light={true} />
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-7">
            <form id="contactForm">
              <div className="form-floating mb-3">
                <input className="form-control bg-secondary text-white border-secondary" id="name" type="text" placeholder="Enter your name..." />
                <label htmlFor="name" className="text-muted">Full name</label>
              </div>
              <div className="form-floating mb-3">
                <input className="form-control bg-secondary text-white border-secondary" id="email" type="email" placeholder="name@example.com" />
                <label htmlFor="email" className="text-muted">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input className="form-control bg-secondary text-white border-secondary" id="phone" type="tel" placeholder="(123) 456-7890" />
                <label htmlFor="phone" className="text-muted">Phone number</label>
              </div>
              <div className="form-floating mb-3">
                <textarea className="form-control bg-secondary text-white border-secondary" id="message" placeholder="Enter your message here..." style={{ height: '10rem' }}></textarea>
                <label htmlFor="message" className="text-muted">Message</label>
              </div>
              <button className="btn btn-primary btn-xl py-3 px-4 fs-5 rounded" id="submitButton" type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;