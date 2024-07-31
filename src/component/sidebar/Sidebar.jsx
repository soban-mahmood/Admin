import React,{useState} from "react";
import logo from "../../../public/logo.png";
import "./Sidebar.css";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "./Data";
function Sidebar() {
  const [selected,setSelected]=useState(0)
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
            <div className={selected === index ? "menuItem active" : 'menuItem'}
            key={index}
            onClick={()=>setSelected(index)}>
              <item.icons />
              <span>{item.heading}</span>
            </div>
          ))}
          <div className="menuItem">
            <UilSignOutAlt />
            <span>Logout</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
