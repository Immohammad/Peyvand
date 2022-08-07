import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />

        <NavMenu>
          <NavLink to="/timeline" activeStyle>
            ایده‌ها
          </NavLink>
          <NavLink to="/profile" activeStyle>
            حساب کاربری
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/">خروج</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
