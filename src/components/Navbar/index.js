import React from "react";
import { Nav, NavLink, NavIcon, Bars } from "./NavbarElements";
import Collegegiri from "../../images/collegegiri.png";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img alt="logo" src={Collegegiri} height="50" width="180" />
        </NavLink>

        <NavIcon onClick={toggle}>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
