import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";

{
  /* https://www.devwares.com/blog/create-responsive-sidebar-in-react/ */
}

function ProfileSidenav() {
  return (
    <CDBSidebar id="profileSidebar">
      <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>} />
      <CDBSidebarContent className="sidebar-content">
        <CDBSidebarMenu>
          <NavLink exact to="/profile/:id" activeClassName="activeClicked">
            <CDBSidebarMenuItem icon="user">دربارۀ من</CDBSidebarMenuItem>
          </NavLink>
          <NavLink
            exact
            to="/profile/:id/myReasearchs"
            activeClassName="activeClicked"
          >
            <CDBSidebarMenuItem icon="book">پژوهش‌های من</CDBSidebarMenuItem>
          </NavLink>         
        </CDBSidebarMenu>
      </CDBSidebarContent>
    </CDBSidebar>
  );
}

export default ProfileSidenav;
