import Divider from '../components/Divider';
import AnimatedCounter from '../components/AnimatedCounter';

const About = () => {
  return (
    <section className="page-section bg-secondary text-white mb-0" id="about">
      {/* THIS IS THE CONTAINER YOU FORGOT TO CLOSE */}
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
              Hello! I'm a final-year undergraduate Computer Science student specializing in Luau scripting, with over 5 years of dedicated experience in Roblox development. 
              I have completed a diverse array of requests, ranging from engine-bypassing, client-sided, optimized rendering pipelines, to physics-based vehicle controllers, to the debugging of legacy codebases. 
              I approach all my tasks with rigorous standards, and have a strong feel for how well players can interact with a system's user flows.
            </p>
            <p className="lead text-light">
              I write clean, modular, and optimized code, with entire game-specific frameworks following OOP and designed for easy scaling, compatibility, and updates. 
              Whether you want me to work on an exploit-resistant backend or a flawlessly responsive frontend, I'm capable of building whatever you need.
              Anything that's possible on Roblox is possible with me.
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="row g-4 mt-2 justify-content-center">
          
          <div className="col-md-5 col-lg-4">
            <div className="p-4 bg-dark rounded-4 h-100 shadow-sm border border-secondary border-opacity-50 text-start">
              <h4 className="fw-bold mb-3 text-white"><i className="fas fa-gamepad text-primary me-2"></i> Gameplay Systems</h4>
              <ul className="list-unstyled text-light mb-0 fs-5">
                <li className="mb-2"><i className="fas fa-angle-right text-primary me-2"></i>Extremely proficient in frontend</li>
                <li className="mb-2"><i className="fas fa-angle-right text-primary me-2"></i>Vehicles, Combat, Abilities, AI...</li>
                <li className="mb-2"><i className="fas fa-angle-right text-primary me-2"></i>...Inventories, Lobbies, Rounds, Parties</li>
                <li className="mb-2"><i className="fas fa-angle-right text-primary me-2"></i>Whatever it is, you name it, I'll make it</li>
              </ul>
            </div>
          </div>

          <div className="col-md-5 col-lg-4">
            <div className="p-4 bg-dark rounded-4 h-100 shadow-sm border border-secondary border-opacity-50 text-start">
              {/* Changed fa-server to fa-wrench */}
              <h4 className="fw-bold mb-3 text-white"><i className="fas fa-wrench text-primary me-2"></i> Updates/Debugging</h4>
              <ul className="list-unstyled text-light mb-0 fs-5">
                <li className="mb-2"><i className="fas fa-angle-right text-primary me-2"></i>Add updates to existing codebases</li>
                <li className="mb-2"><i className="fas fa-angle-right text-primary me-2"></i>Fix game-breaking bugs</li>
                <li className="mb-2"><i className="fas fa-angle-right text-primary me-2"></i>Remove free model backdoors/viruses</li>
              </ul>
            </div>
          </div>

          <div className="col-md-5 col-lg-4">
            <div className="p-4 bg-dark rounded-4 h-100 shadow-sm border border-secondary border-opacity-50 text-start">
              <h4 className="fw-bold mb-3 text-white"><i className="fas fa-shield-halved text-primary me-2"></i> Clean and Secure</h4>
              <ul className="list-unstyled text-light mb-0 fs-5">
                <li className="mb-2"><i className="fas fa-angle-right text-primary me-2"></i>Server validation & anti-cheats</li>
                <li className="mb-2"><i className="fas fa-angle-right text-primary me-2"></i>Code organized into hierarchical modules</li>
                <li className="mb-2"><i className="fas fa-angle-right text-primary me-2"></i>Maintains separation of concerns</li>
              </ul>
            </div>
          </div>

        </div>
      </div> {/* <-- THIS IS THE DIV YOU FORGOT */}
    </section>
  );
};

export default About;