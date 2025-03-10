import "./Header.css";
import NavItem, { NavItemDropdown } from "../../components/NavItem/NavItem";
import { Link } from "react-router-dom";
import logo from "../../assets/photo/zszb.png";
const Header = () => {
  return (
    <div className="navbar navbar-expand-md fixed-top navbar-dark text-white " style={{'background-color':'var(--color-darkest)'}}>
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt=""style={{ width: "100px", height: "70" }}></img>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainmenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainmenu">
          <ul className="navbar-nav ms-auto">
            <NavItem>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </NavItem>

            <NavItem>
              <Link to="/CarList" className="nav-link">
              car listing
              </Link>
            </NavItem>

            <NavItem>
              <Link to="/MostPopular" className="nav-link">
               most popular
              </Link>
            </NavItem>

           
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;
