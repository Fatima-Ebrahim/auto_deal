import React from "./Home.css";
import { Hero, MostPopular, CarList,FeaturesSection} from "../../sections/index";

function Home() {
  return (
    <div>
      <Hero />
      <FeaturesSection/>
      <MostPopular />
      <CarList />
    </div>
  );
}

export default Home;
