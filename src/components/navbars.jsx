import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "./stuffs/orangeLogo.png";

const Navbars = () => {
  return (
    <Navbar sticky="top" expand="sm" collapseOnSelect className="navbarFont">
      <Navbar.Brand className="navbarFont">
        <img src={logo} width="40px" height="40px" />{" "}
        <span style={{ color: "#DE8668" }}>پیوند</span>
      </Navbar.Brand>

      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav>
          {/* <NavDropdown title="ورود/ثبت نام" id="nav-dropdown">
            <NavDropdown.Item href="#products/tea">ورود</NavDropdown.Item>
            <NavDropdown.Item href="#products/coffee">ثبت نام</NavDropdown.Item>
          </NavDropdown> */}

          <Nav.Link as={Link} to="/login" className="navbarFont">
            ورود و ثبت نام
          </Nav.Link>
          <Nav.Link as={Link} to="/" className="navbarFont">
            پروژه‌ها
          </Nav.Link>
          <Nav.Link as={Link} to="/news" className="navbarFont">
            اخبار و اطلاعیه‌ها
          </Nav.Link>
          <Nav.Link as={Link} to="/about-us" className="navbarFont">
            دربارۀ ما
          </Nav.Link>

          <form className="form-inline my-2 my-lg-0" id="searchForm">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-warning my-2 my-sm-0"
              type="submit"
              variant="custom"
            >
              جستجو
            </button>
          </form>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navbars;
