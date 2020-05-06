import React from "react";
import { Link } from "react-router-dom";
import logo_img from "../../images/logocook.jpg";

const estilo = {
    width: "45px",
};

export default function Menu() {
    return (
        <section className="todo-list">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">
                    {" "}
                    <img
                        className="rounded-circle "
                        style={estilo}
                        src={logo_img}
                        alt=""
                    />
                </a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item ">
                            <div class="nav-link">
                                {<Link to="/" >Inicio</Link>} 
                            </div>                          
                                                                                      
                        </li>
                        <li class="nav-item ">
                            <div class="nav-link">
                                {<Link to="/ingredients" >Materiales</Link>} 
                            </div>                                                                                                               
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="nav-link">Login</Link>
                        </li>
                        <li class="nav-item">
                            <a
                                class="nav-link disabled"
                                href="#"
                                tabindex="-1"
                                aria-disabled="true"
                            >
                                Disabled
              </a>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input
                            class="form-control mr-sm-2"
                            type="search"
                            placeholder="Buscar"
                            aria-label="Buscar"
                        />
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
                            Buscar
            </button>
                    </form>
                </div>
            </nav>
        </section>
    );
}

/**
 *  <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="navbar-brand">
                    <img className="rounded-circle " style={estilo} src={logo_img} alt="" />
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li  className="nav-item active">

                            <span className="sr-only">
                                Inicio {<Link to="/" >Inicio</Link>}
                            </span>
                            <span className="sr-only">
                                Materiales {<Link to="/" >Materiales</Link>}
                            </span>

                        </li>


                    </ul>
                </div>
            </nav>
 */

/**
  *
  * <!-- <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>-->
  */
