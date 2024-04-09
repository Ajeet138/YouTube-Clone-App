import React from "react";
import SideBar from "./SideBar";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const Body = () => {
  const isSideBarOpen = useSelector((store) => store.appConfig.toggleNavbar);
  return (
    <div className="flex">
      {isSideBarOpen && <SideBar />}
      <Outlet />
    </div>
  );
};

export default Body;
