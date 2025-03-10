import "./Hero.css";
import { PrimaryButton,SecondaryButton } from "../../components";
function Hero() {
  return (
    <div className="main-banner">
      <div className="hero-text"></div>
      <h6 className="hero-subtitle">Find Your Dream Car Today!</h6>
      <h4 className="hero-title">
        <br /><em> Explore </em>  a wide range of cars at unbeatable prices. 
        <br />  
      </h4>
      <PrimaryButton>
      Browse Now
      </PrimaryButton>
      {/* <div className="hero-button">
        <a href="browse.html"> Browse Now</a>
      </div> */}
    </div>
  );
}

export default Hero;
