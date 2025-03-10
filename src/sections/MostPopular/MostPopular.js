import "./MostPopular.css";
import { MostPopularCard, Title, SectionWrapper } from "../../components/index";

import MostPopularData from "../../Data/MostPopularData";
function MostPopular() {
  const MostPopularItems = MostPopularData.map((card) => (
    <MostPopularCard
      image={card.image}
      name={card.name}
      type={card.type}
      rate={card.rate}
      download={card.price}
    />
  ));

  return (
    <SectionWrapper>
      <Title titlePrimary="Most Popular" titleSecondary="Right Now" />
      <div className="most-popular-items">{MostPopularItems}</div>
    </SectionWrapper>
  );
}

export default MostPopular;
