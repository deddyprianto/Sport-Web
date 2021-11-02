import React from "react";
import Home from "./Home";

const Data = ({ style }) => {
  return (
    <div
      style={{ backgroundColor: style.backgroundColor, margin: style.margin }}
    >
      this is page data
    </div>
  );
};

export default Home(Data);
