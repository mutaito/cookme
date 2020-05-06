import React from "react";
import { Link } from "react-router-dom";
import logo_img from "../../images/logocook.jpg";

const estilo = {
    width: "45px",
};

export default function Menu() {
    return (
        <section className="todo-list">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    {" "}
                    <img
                        className="rounded-circle "
                        style={estilo}
                        src={logo_img}
                        alt=""
                    />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item ">
                            <div className="nav-link">
                                {<Link to="/home/" >Inicio</Link>}
                            </div>
                        </li>
                        <li className="nav-item ">
                            <div className="nav-link">
                                {<Link to="/recipe/" >Recipe</Link>}
                            </div>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link disabled"
                                href="#"
                                /*tabindex="-1"*/
                                aria-disabled="true">
                                Disabled
                            </a>
                        </li>
                        <li className="nav-item ">
                            <div className="nav-link">
                                {<Link to="/" >Login</Link>}
                            </div>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input
                            className="form-control mr-sm-2"
                            type="search"
                            placeholder="Buscar"
                            aria-label="Buscar"
                        />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                            Buscar
                        </button>
                    </form>
                </div>
            </nav>
        </section>
    );
}