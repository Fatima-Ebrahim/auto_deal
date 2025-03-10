import { SecondaryButton } from "../Buttons/Buttons";
import "./CarListCard.css";

function GamingLibraryCard(props) {
  return (
    <div className="gaming-library-card">
      <ul className="gaming-library-ul">
        <li className="gaming-library-li">
          <img className="gaming-library-card-image" src={props.image} alt="" />
        </li>
        <li className="gaming-library-li">
          <h4 className="gaming-library-h4">{props.name}</h4>
          <span className="gaming-library-span">{props.type}</span>
        </li>
        <li className="gaming-library-li">
          <h4 className="gaming-library-h4"> Date Added</h4>
          <span className="gaming-library-span"> {props.dateAdded}</span>
        </li>
        <li className="gaming-library-li">
          <h4 className="gaming-library-h4"> Hours Played</h4>
          <span className="gaming-library-span"> {props.hoursPlayed}</span>
        </li>
        <li className="gaming-library-li">
          <h4 className="gaming-library-h4"> Currently</h4>
          <span className="gaming-library-span"> {props.currently}</span>
        </li>
        <SecondaryButton >Buy</SecondaryButton>
      </ul>
    </div>
  );
}

export default GamingLibraryCard;
