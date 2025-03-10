import "./NavItem.css";
import React from "react";

function NavItem(props) {
  return <li className="nav-item">{props.children}</li>;
}

function NavItemDropdown(props) {
  return <li className="nav-item dropdown">{props.children}</li>;
}
export default NavItem;
export { NavItemDropdown };
