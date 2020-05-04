import React, { Component } from 'react';
import './Login.css';
import logocook from '../../images/logocook.jpg';


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }
        this.clickHandler = this.clickHandler.bind(this)
        this.setUsername = this.setUsername.bind(this)
        this.setPassword = this.setPassword.bind(this)

    }

    setUsername(username) {
        this.setState({ username: username })
    }

    setPassword(password) {
        this.setState({ password: password })
    }

    clickHandler() {
        // put your own code here
        alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    }

    render() {

        return (
            <div className="row row-background">
                <div className="col-sm-6 col-md-4 "></div>
                <div className="col-sm-6 col-md-4 ">
                    <div className="account-wall">
                        <h1 className="text-center login-title">Cookme</h1>
                        <img className="rounded-circle profile-img" alt="..." src={logocook}></img>
                        <form className="form-signin">
                            <input type="text" className="form-control" placeholder="Correo" required />
                            <input type="password" className="form-control" placeholder="Contraseña" required />
                            <button className="btn btn-lg btn-primary btn-block" onClick={this.clickHandler}>Entrar</button>
                        </form>
                        <p className="text-center mb-3 mt-2">Conectar con</p>
                        <div className="row mx-auto ">
                            <div className="col-4"> <i className="fab fa-twitter"></i> </div>
                            <div className="col-4"> <i className="fab fa-facebook"></i> </div>
                            <div className="col-4"> <i className="fab fa-google"></i> </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login;