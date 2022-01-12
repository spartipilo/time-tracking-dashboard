import React from "react";
import "../style/cards.css";
import iconWork from "../images/icon-work.svg";
import iconPlay from "../images/icon-play.svg";
import iconStudy from "../images/icon-study.svg";
import iconExercise from "../images/icon-exercise.svg";
import iconSocial from "../images/icon-social.svg";
import iconSelfCare from "../images/icon-self-care.svg";

function CardSubject({ title, color, index, timeframes, getValue }) {
  const currentReport = () => {
    switch (getValue.toLowerCase()) {
      case "daily":
        return timeframes.daily.current + "hrs";
      case "weekly":
        return timeframes.weekly.current + "hrs";
      case "monthly":
        return timeframes.monthly.current + "hrs";
      default:
    }
  };
  const lastReport = () => {
    switch (getValue.toLowerCase()) {
      case "daily":
        return "Last Day - " + timeframes.daily.previous + "hrs";
      case "weekly":
        return "Last Week - " + timeframes.weekly.previous + "hrs";
      case "monthly":
        return "Last Month - " + timeframes.monthly.previous + "hrs";
      default:
    }
  };
  // ICONS HEADERS OF THE CARDS
  const imageSelected = () => {
    switch (title) {
      case "Work":
        return iconWork;
      case "Play":
        return iconPlay;
      case "Study":
        return iconStudy;
      case "Exercise":
        return iconExercise;
      case "Social":
        return iconSocial;
      case "Self Care":
        return iconSelfCare;
      default:
    }
  };
  return (
    <div
      className="container-card"
      style={{
        backgroundImage: `url(${imageSelected()})`,
        backgroundColor: `${color}`,
        gridArea: `${"card" + index}`,
      }}
    >
      <div>
        <header>
          <span>{title}</span>
          <span className="points__other">...</span>
        </header>
        <main>
          <section>
            <h1>{currentReport()}</h1>
          </section>
          <footer>
            <span>{lastReport()}</span>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default CardSubject;
