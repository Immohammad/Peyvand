import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "./stuffs/orangeLogo.png";
import { useContext } from "react";
import User from "./context";

const Navbars = () => {
  const user = useContext(User);
  function handleLogout() {
    localStorage.removeItem("token");
    user.setUSER(null);
    window.location = "/";
  }
  return (
    <Navbar sticky="top" expand="sm" collapseOnSelect className="navbarFont">
      <Navbar.Brand className="navbarFont">
        <img src={logo} width="40px" height="40px" />{" "}
        <span style={{ color: "#DE8668" }}>پیوند</span>
      </Navbar.Brand>

      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav>
          {user.USER ? (
            <NavDropdown
              title={user.USER}
              id="nav-dropdown"
              className="navbarFont"
            >
              <NavDropdown.Item as={Link} to="/dashboard">
                حساب کاربری
              </NavDropdown.Item>
              <NavDropdown.Item onClick={handleLogout}>خروج</NavDropdown.Item>
            </NavDropdown>
          ) : (
            <Nav.Link as={Link} to="/login" className="navbarFont">
              ورود و ثبت نام
            </Nav.Link>
          )}

          <Nav.Link as={Link} to="/" className="navbarFont">
            پروژه‌ها
          </Nav.Link>
          <Nav.Link as={Link} to="/dashboard/myReasearchs" className="navbarFont">
            ساخت پروژه
          </Nav.Link>
          <Nav.Link as={Link} to="/dashboard" className="navbarFont">
            پروفایل
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
