import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      inputsRequired: true,
    };

  }

  render() {
    const state = JSON.stringify(this.state);
    return (
      <div className="row row-background">
       <pre>{state}</pre>
      </div>
    );
  }
}
export default Home;
