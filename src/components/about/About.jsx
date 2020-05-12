import React, { Component } from "react";
import "./About.css";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      inputsRequired: true,
    };
  }

  render() {
    //const state = JSON.stringify(this.state);
    return (
      <div className="row">       
        <div className="container">
        <div className="row">
            <div className="col-sm">col-sm</div>
            <div className="col-sm">col-sm</div>
            <div className="col-sm">col-sm</div>
          </div>
          <div className="row">
            <div className="col-sm-10">
              <h3 className="text-center">Acerca de Cookme!</h3>
              <p  className="text-break text-center">
                Es una aplicación para guardar, controlar y compartir tus recetas únicas.
              </p>
            </div>
            <div className="col-sm-2">col-sm-2</div>
          </div>          
        </div>
      </div>
    );
  }
}
export default About;
