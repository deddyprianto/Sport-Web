import React from "react";
import Home from "./Home";

const Countries = ({ style }) => {
  return (
    <div
      style={{ backgroundColor: style.backgroundColor, margin: style.margin }}
    >
      this is a Countries
    </div>
  );
};

export default Home(Countries);
