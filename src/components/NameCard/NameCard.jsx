import React from "react";
import "./nameCard.scss";

const nameCheapUrl =
  "https://www.namecheap.com/domains/registration/results/?domain=";

const NameCard = ({ suggestedName }) => {
  return (
    <a
      href={`${nameCheapUrl}${suggestedName}`}
      target="_blank"
      rel="noreferrer"
      className="card__link"
    >
      <div className="result__name-card">
        <p className="result__name">{suggestedName}</p>
      </div>
    </a>
  );
};

export default NameCard;
