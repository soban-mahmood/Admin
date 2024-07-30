import React from "react";
import logo from "../../../public/logo.png"
import './Sidebar.css'
function Sidebar() {

  return (
    <div>
      <div className="Sidebar">
        <div className="logo">
          <img src={logo} alt="" />
          Sh<span>o</span> p
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
