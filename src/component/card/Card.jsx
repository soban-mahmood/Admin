import React, { useState } from "react";
import "./card.css";
// import { AnimateSharedLayout } from "framer-motion";
function Card() {
  const [extended, setExtended] = useState(false);
  return (
    <>
      {/* <AnimateSharedLayout> */}
        {extended ? "ExtendedCard" : <CompactCard />}
      {/* </AnimateSharedLayout> */}
    </>
  );
}

function CompactCard(params) {
  const Png = params.png;
  return (
    <div className="Compactcard">
      <div className="radialBar">chart</div>
      <div className="details">
        {Png}
        <span>{params.value}</span>
      </div>
      <div className="cardFooter">
        <button onClick={() => setExtended(true)}>Expand</button>
      </div>
    </div>
  );
}

export default Card;
