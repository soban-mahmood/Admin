import React from "react";
import { UpdatesData } from "../sidebar/Data";
import './Updates.css'
function Uptodate() {
  return (
    <div className="updates">
      {UpdatesData.map((update) => (
        <div key={update.id} className="updatesa">
          <img src={update.img} alt="" />
          <div className="noti">
         <div style={{margin:'0.5rem'}}>
          <span>{update.name}</span>
          <br />
          <span>{update.noti}</span>
         </div>
         <div>
          <span>{update.time}</span>
         </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Uptodate;