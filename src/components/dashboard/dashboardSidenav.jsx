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

function DashboardSidenav() {
  return (
    <CDBSidebar id="profileSidebar">
      <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>} />
      <CDBSidebarContent className="sidebar-content">
        <CDBSidebarMenu>
          <NavLink exact to="/dashboard" activeClassName="activeClicked">
            <CDBSidebarMenuItem icon="user">دربارۀ من</CDBSidebarMenuItem>
          </NavLink>
          <NavLink
            exact
            to="/dashboard/myResearchs"
            activeClassName="activeClicked"
          >
            <CDBSidebarMenuItem icon="book">پژوهش‌های من</CDBSidebarMenuItem>
          </NavLink>
          <NavLink
            exact
            to="/dashboard/notifications"
            activeClassName="activeClicked"
          >
            <CDBSidebarMenuItem icon="exclamation-circle">
              اعلان‌ها
            </CDBSidebarMenuItem>
          </NavLink>
          <NavLink
            exact
            to="/dashboard/bookmarks "
            activeClassName="activeClicked"
          >
            <CDBSidebarMenuItem icon="bookmark">
              پروژه‌های ذخیره‌شده
            </CDBSidebarMenuItem>
          </NavLink>
          <NavLink exact to="/dashboard/edit" activeClassName="activeClicked">
            <CDBSidebarMenuItem icon="edit">ویرایش اطلاعات</CDBSidebarMenuItem>
          </NavLink>

          <NavLink exact to="/" activeClassName="activeClicked">
            <CDBSidebarMenuItem icon="columns">خروج</CDBSidebarMenuItem>
          </NavLink>
        </CDBSidebarMenu>
      </CDBSidebarContent>
    </CDBSidebar>
  );
}

export default DashboardSidenav;
