import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import logo from "./stuffs/orangeLogo.png";
import { useContext, useState } from "react";
import User from "./context";
import axios from "axios";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

const Navbars = () => {
  const user = useContext(User);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    user.setUSER(null);
    window.location = "/";
  }
  function handleSearch(event) {
    event.preventDefault();
    axios
      .get(
        `http://rezaklhor-001-site1.etempurl.com/User/GetUserByUsername?username=${search}`
      )
      .then((response) => {
        navigate(`/profile/${response.data.id}`);
      })
      .catch((error) => {
        if (error.response.status == 404) {
          NotificationManager.warning("کاربر مورد نظر وجود ندارد");
        } else {
          NotificationManager.warning("جستجو با مشکلی مواجه شد");
        }
      });
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
            پژوهش‌ها
          </Nav.Link>

          <form
            className="form-inline my-2 my-lg-0"
            id="searchForm"
            onSubmit={handleSearch}
          >
            <input
              className="form-control mr-sm-2"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              type="search"
              placeholder="جستجوی نام کاربری"
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
      <NotificationContainer />
    </Navbar>
  );
};

export default Navbars;
