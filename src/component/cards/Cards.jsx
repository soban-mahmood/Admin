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
              image={card.png}
              value={card.value}
              barValue={card.barValue}
              series={card.series}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
