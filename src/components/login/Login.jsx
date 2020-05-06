import React, { Component } from "react";
import "./Login.css";
import logocook from "../../images/logocook.jpg";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      inputsRequired: true,
    };
    
    this.setUsername = this.setUsername.bind(this);
    this.setPassword = this.setPassword.bind(this);
  }

  setUsername(username) {
    this.setState({ username: username });
  }

  setPassword(password) {
    this.setState({ password: password });
  }

  async send(event) {
    event.preventDefault();
    const res = {
      username: this.state.username,
      password: this.state.password,
    };
    console.log(res);
    const val = await this.validate(res);
    if (val) {
        if( res.username === '' && res.password === '' ){
           console.log('Login succes');

        }
      this.setState({
        inputsRequired: false,
      });
      return
      //this.props.send(res);
      //this.closeModalHandler();
    } else {
      this.setState({
        inputsRequired: true,
      });
      //alert("Rellene los campos");
    }
  }
  async validate(objectValidate) {
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

  valueToState = ({ name, value, checked, type }) => {
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
                onChange={(event) => this.valueToState(event.target)}
                required
              />
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                name="password"
                onChange={(event) => this.valueToState(event.target)}
                defaultValue={this.state.password}
                required
              />
              <button
                className="btn btn-lg btn-primary btn-block"
                onClick={(event) => this.send(event)}
                //disabled={this.validateForm()}
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
export default Login;
