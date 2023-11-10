import React from "react";
import PropTypes from "prop-types";
import "./results.scss";
import NameCard from "../NameCard/NameCard";

const Results = ({ suggestedNames }) => {
  const suggestedNameJSX = suggestedNames.map((suggestedName) => {
    return <NameCard key={suggestedName} suggestedName={suggestedName} />;
  });

  return <div className="results__container">{suggestedNameJSX}</div>;
};

Results.propTypes = {
  suggestedNames: PropTypes.array.isRequired,
  //   index: PropTypes.string.isRequired,
};
export default Results;
