import React, { Component } from "react";
import "./Recipe.css";

class Recipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe:{
        name: "",
        type: "",
        author: "",
        created_at: ""
      }
    };

  }

  render() {
    const state = JSON.stringify(this.state);
    return (
      <div className="row">
        <h3>Recipe</h3>
       <pre>{state}</pre>
      </div>
    );
  }
}
export default Recipe;
