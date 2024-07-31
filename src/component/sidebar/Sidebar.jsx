import React from "react";
import logo from "../../../public/logo.png";
import "./Sidebar.css";
import { UilEstate } from "@iconscout/react-unicons";
import { SidebarData } from "./Data";
function Sidebar() {
  return (
    <div>
      <div className="Sidebar">
        <div className="logo">
          <img src={logo} alt="" />
          <span>
            Sh<span>o</span>pe
          </span>
        </div>
        {/* Menu */}
        <div className="menu">
  {SidebarData?.map((item, index) => (
    <div className="menuItem">
      <item.icons />
      <span>{item.heading}</span>
    </div>
  ))}
</div>
      </div>
    </div>
  );
}

export default Sidebar;
