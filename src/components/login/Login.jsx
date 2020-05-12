import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import "./Login.css";
import logocook from "../../images/logocook.jpg";
import { getAuth } from "../../service/index";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      inputsRequired: true,
    };
  }

  setUsername = (username) => {
    this.setState({ username: username });
  }

  setPassword = (password) => {
    this.setState({ password: password });
  }

  send = async (event) => {
    event.preventDefault();
    const res = {
      username: this.state.username,
      password: this.state.password,
    };
    
    if (true) {
      if( res.username === '' && res.password === '' ){
        console.log('Login succes');
        const auntenticado = await getAuth();
        if(auntenticado===true){
          localStorage.setItem('auntenticado', true);
          this.props.history.push("/home");
        }else{
          //localStorage.removeItem('auntenticado');
          console.log('Error No auth')
          this.props.history.push("/");
        }         
      }
      
    } else {
      this.setState({
        inputsRequired: true,
      });
      //alert("Rellene los campos");
    }
  }
  
  validate = async (objectValidate) => {
    //console.log(objectValidate)
    var flag = true;
    for (var propertyForm in objectValidate) {
      if (objectValidate[propertyForm] === "" && propertyForm !== "id") {
        console.log(objectValidate[propertyForm]);
        flag = false;
        break;
      }
    }
    return flag;
  }

  valueToState = (event) => {
    const { name, value, checked, type } = event.target
    //valueToState = (target) <-- { name, value, checked, type }
    this.setState(() => {
      return { [name]: type === "checkbox" ? checked : value };
    });
  };

  render() {
    return (
      <div className="row row-background">
        <div className="col-sm-6 col-md-4 "></div>
        <div className="col-sm-6 col-md-4 ">
          <div className="account-wall">
            <h1 className="text-center login-title">Cookme</h1>
            <img
              className="rounded-circle profile-img"
              alt="..."
              src={logocook}
            ></img>
            <form className="form-signin">
              <input
                type="text"
                className="form-control"
                placeholder="Usuario"
                name="username"
                defaultValue={this.state.username}
                onChange={this.valueToState}
                required
              />
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                name="password"
                onChange={this.valueToState}
                defaultValue={this.state.password}
                required
              />
              <button
                className="btn btn-lg btn-primary btn-block"
                onClick={this.send}
              >
                Entrar
              </button>
            </form>
            <p className="text-center mb-3 mt-2">Conectar con</p>
            <div className="row mx-auto ">
              <div className="col-4">
                {" "}
                <i className="fab fa-twitter"></i>{" "}
              </div>
              <div className="col-4">
                {" "}
                <i className="fab fa-facebook"></i>{" "}
              </div>
              <div className="col-4">
                {" "}
                <i className="fab fa-google"></i>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Login);
