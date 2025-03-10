import { SectionWrapper, Title, CarListCard } from "../../components";
import "./CarList.css";
import GamingLibraryCardData from "../../Data/GamingLibraryData";
function CarList() {
  const gamingLibraryCardData = GamingLibraryCardData.map((member) => (
    <CarListCard
      key={member.id}
      image={member.image}
      name={member.name}
      type={member.type}
      dateAdded={member.date_Added}
      hoursPlayed={member.hours_played}
      currently={member.currently}
    />
  ));
  return (
    <SectionWrapper>
      <Title titlePrimary="Brows" titleSecondary=" Car List" />
      {gamingLibraryCardData}
    </SectionWrapper>
  );
}

export default CarList;
