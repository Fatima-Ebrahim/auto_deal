import "./MostPopularCard.css";
import { FaSplotch,FaDownload } from "react-icons/fa6";

const MostPopularCard = (props) => {
  return (
    <div className="most-popular-item">
      <div className="card-wrapper">
        <img className="most-popular-image" src={props.image} alt="" style={{ width: "250px", height: "100px" }}></img>
        <div className="most-popular-content">
          <ul className="list">
            <li >
              <h4 className="name">{props.name}</h4>
            </li>
            <li>
              <span className="type">{props.type}</span>
            </li>
          </ul>
          <ul className="list-2">
            <li>
              <span style={{"color":'yellow'}} ><FaSplotch />   </span>
              <span className="rate">{props.rate}</span>
            </li>
            <li>
            {/* <span style={{"color":'var(--color-primary)'}} ><FaDownload /> {"    "}  </span> */}
              <span className="download">{props.download}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MostPopularCard;
