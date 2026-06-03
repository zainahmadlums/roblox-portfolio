import Divider from '../components/Divider';
import AnimatedCounter from '../components/AnimatedCounter';

const About = () => {
  return (
    <section className="page-section bg-secondary text-white mb-0" id="about">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-white mb-0">About Me</h2>
        <Divider light={true} />
        
        {/* Animated Counters */}
        <div className="row justify-content-center mb-5 mt-4">
          <div className="col-md-4 mb-4 mb-md-0">
            <AnimatedCounter target={5} label="Years of Experience" />
          </div>
          <div className="col-md-4">
            <AnimatedCounter target={25} label="Commissions Completed" />
          </div>
        </div>

        {/* Bio Section */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-10 text-center">
            <p className="lead text-light mb-4">
              I am a computer science student and lead developer specializing in complex software architecture, with over 5 years of dedicated experience in Roblox development using Luau. From engineering networked physics for high-intensity projects like Metal Mayhem to deploying full-stack and mobile applications, I approach game development with rigorous software engineering standards.
            </p>
            <p className="lead text-light">
              I focus on writing clean, modular, and heavily optimized code built around Object-Oriented Programming. Whether you need an exploit-resistant backend or a flawlessly responsive frontend, I am capable of building whatever you throw at me.
            </p>
          </div>
        </div>

        {/* Skills Grid - Now with actual bullets and legible text */}
        <div className="row g-4 mt-2 justify-content-center">
          <div className="col-md-5 col-lg-4">
            <div className="p-4 bg-dark rounded-4 h-100 shadow-sm border border-secondary border-opacity-50 text-start">
              <h4 className="fw-bold mb-3 text-white"><i className="fas fa-server text-primary me-2"></i> Backend & Infra</h4>
              <ul className="list-unstyled text-light mb-0 fs-6">
                <li className="mb-2"><i className="fas fa-angle-right text-primary me-2"></i>Scalable DataStore pipelines & MemoryStore queues.</li>
                <li className="mb-2"><i className="fas fa-angle-right text-primary me-2"></i>Full-stack MERN integrations (e.g., Real-time Ludo).</li>
                <li className="mb-2"><i className="fas fa-angle-right text-primary me-2"></i>Secure, authoritative server-client architectures.</li>
              </ul>
            </div>
          </div>
          <div className="col-md-5 col-lg-4">
            <div className="p-4 bg-dark rounded-4 h-100 shadow-sm border border-secondary border-opacity-50 text-start">
              <h4 className="fw-bold mb-3 text-white"><i className="fas fa-gamepad text-primary me-2"></i> Gameplay Systems</h4>
              <ul className="list-unstyled text-light mb-0 fs-6">
                <li className="mb-2"><i className="fas fa-angle-right text-primary me-2"></i>Complex networked vehicle physics (e.g., Metal Mayhem).</li>
                <li className="mb-2"><i className="fas fa-angle-right text-primary me-2"></i>Custom combat, inventory networks, and dynamic AI.</li>
                <li className="mb-2"><i className="fas fa-angle-right text-primary me-2"></i>Mobile hardware telemetry & sensor fusion (DeployTeach).</li>
              </ul>
            </div>
          </div>
          <div className="col-md-5 col-lg-4">
            <div className="p-4 bg-dark rounded-4 h-100 shadow-sm border border-secondary border-opacity-50 text-start">
              <h4 className="fw-bold mb-3 text-white"><i className="fas fa-shield-halved text-primary me-2"></i> Security & ML</h4>
              <ul className="list-unstyled text-light mb-0 fs-6">
                <li className="mb-2"><i className="fas fa-angle-right text-primary me-2"></i>Strict server validation & robust anti-cheat frameworks.</li>
                <li className="mb-2"><i className="fas fa-angle-right text-primary me-2"></i>Machine Learning: PyTorch, SAEs, and OOD detection.</li>
                <li className="mb-2"><i className="fas fa-angle-right text-primary me-2"></i>Low-level microcontroller (TM4C) hardware programming.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;