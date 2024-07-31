import React from "react";
import { CardsData } from "../sidebar/Data";
import Card from "../card/Card";
import "./Cards.css";
function Cards() {
  return (
    <div className="Cards">
      {CardsData.map((card, id) => {
        return (
          <div className="parentCard">
            <Card
              title={card.title}
              png={card.png}
              value1={card.value1}
              bar={card.bar}
              series={card.series}
              color={card.color}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
