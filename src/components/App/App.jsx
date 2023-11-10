/* eslint-disable no-undef */
import { useState } from "react";
import "./app.scss";
import name from "@rstacruz/startup-name-generator";
import Header from "../Header/Header";
import SearchBox from "../Search/SearchBox";
import Results from "../Results/Results";

const App = () => {
  const [myState] = useState("Name It!");
  const [headerExpand, setHeaderExpand] = useState(true);
  const [suggestedNames, setSuggestedNames] = useState([]);

  const handleChanges = (inputText) => {
    // inputText.length > 0 ? setHeaderExpand(false) : setHeaderExpand(true);
    setSuggestedNames(inputText ? name(inputText) : []);
    setHeaderExpand(!inputText);
  };

  return (
    <div>
      <Header title={myState} headerExpanded={headerExpand} />
      <SearchBox onInputChange={handleChanges} />
      <Results suggestedNames={suggestedNames} />
    </div>
  );
};

export default App;
