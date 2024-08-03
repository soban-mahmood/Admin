import React from "react";
import "./Main.css";
import Cards from "../cards/Cards";
import Table from "../table/Table";
function Main() {
  return (
    <div className="Main">
           <h1>Dashboard</h1>
      <Cards />
      <Table/>
    </div>
  );
}

export default Main;
