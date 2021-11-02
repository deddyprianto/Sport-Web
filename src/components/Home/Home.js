import React from "react";

const Home = (Component) =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        backgroundColor: "pink",
        margin: 20,
      };
    }
    render() {
      return <Component style={{ ...this.state }} />;
    }
  };

export default Home;
