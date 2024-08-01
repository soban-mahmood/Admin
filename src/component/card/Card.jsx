import { motion } from "framer-motion";
import React, { useState } from "react";
import "./card.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts";

function Card({ title, value1, bar, png, color }) {
  const [extended, setExtended] = useState(false);

  return (
    <motion.div layout>
      {extended ? (
        <div className="extendedCard">
          <ExtendedCard
            onClick={() => setExtended(false)}
            title={title}
            png={png}
            value1={value1}
            bar={bar}
            color={color}
          />
        </div>
      ) : (
        <div className="compactCard">
          <CompactedCard
            title={title}
            png={png}
            value1={value1}
            bar={bar}
            color={color}
            setExtended={() => {
              setExtended(true);
            }}
          />
        </div>
      )}
    </motion.div>
  );
}

function CompactedCard({ title, png, value1, bar, color, setExtended }) {
  const Png = png;
  return (
    <div
      className="compactCard"
      style={{
        background: color.backGround,
        boxShadow: `${color.boxShadow}`,
      }}
      onClick={setExtended}
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

function ExtendedCard({ onClick, title, color }) {
  const data = {
    options: {
      chart: {
        type: "area",
        height: "auto",
      },
      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.35,
      },
      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["white"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: true,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
    },
  };

  return (
    <div
      className="extendedCard"
      style={{
        background: color.backGround,
        boxShadow: `${color.boxShadow}`,
      }}
    >
      <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
        <UilTimes onClick={onClick} />
      </div>
      <span>{title}</span>
      <div className="chartContainer">
        <Chart
          series={[
            {
              name: "Series Name",
              data: [34, 44, 54, 21, 12, 43, 33],
            },
          ]}
          type="area"
          options={data.options}
          width={400}
          height={320}
        />
      </div>
      <span>Last 24 hours</span>
    </div>
  );
}

export default Card;
