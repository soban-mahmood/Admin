import { motion } from "framer-motion";
import React, { useState } from "react";
import "./card.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
function Card({ title, value1, bar, series, png, color }) {
  const [extended, setExtended] = useState(false);
  return (
    <motion.div layout>
      {extended ? (
        <div className="extendedCard">{/* Extended Card Content */}</div>
      ) : (
        <div className="compactCard">
          <CompactedCard
            title={title}
            png={png}
            value1={value1}
            bar={bar}
            series={series}
            color={color}
          />
        </div>
      )}
    </motion.div>
  );
}

function CompactedCard({ title, png, value1, bar, series, color }) {
  const Png = png;
  return (
    <div
      className="compactCard"
      style={{
        background: color.backGround,
        boxShadow: `${color.boxShadow}`,
      }}
    >
      <div className="radialBar">
        <CircularProgressbar text={`${bar * 1}%`} value={bar} />
        <span>{title}</span>
      </div>
      <div className="details">
        <Png />

        <span>$ {value1}</span>
        <span>Last 24 hrs</span>
      </div>
    </div>
  );
}

export default Card;
