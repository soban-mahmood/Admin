import React, { useState } from "react";
import logo from "../../../public/logo.png";
import "./Sidebar.css";
import { UilSignOutAlt, UilBars } from "@iconscout/react-unicons";
import { SidebarData } from "./Data";

import { motion } from "framer-motion";
function Sidebar() {
  const [selected, setSelected] = useState(0);

  const [expanded, setExpaned] = useState(false);
  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-90%",
    },
  };

  return (
    <>
      <div
        className="bars"
        style={expanded ? { left: "60%" } : { left: "5%" }}
        onClick={() => setExpaned(!expanded)}
      >
        <UilBars />
      </div>
      <motion.div
        className="Sidebar"
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ""}
      >
        <div className="logo" >
        <img src={logo} alt="logo" style={{ color: '#FFAF00' }} />
          <span>
            Sh<span>o</span>pe
          </span>
        </div>
        {/* Menu */}
        <div className="menu">
          {SidebarData?.map((item, index) => (
            <div
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => setSelected(index)}
            >
              <item.icons />
              <span>{item.heading}</span>
            </div>
          ))}
          <div className="menuItem">
            <UilSignOutAlt />
            <span>Logout</span>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Sidebar;
