import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.png"
import { NavLink } from "react-router-dom";

const Navbar=()=>{
    return(
        <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <a className="navbar-brand" href="#"><img src={logo}></img></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navBar" aria-controls="navBar" aria-expanded="false" aria-label="toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navBar">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item"><NavLink to="/" className="nav-link">Shop</NavLink></li>
                        <li className="nav-item"><NavLink to="/mens" className="nav-link">Mens</NavLink></li>
                        <li className="nav-item"><NavLink to="/womens" className="nav-link">Womens</NavLink></li>
                        <li className="nav-item"><NavLink to="/kids" className="nav-link">Kids</NavLink></li>
                    </ul>
                    <div className="login_btn">
                        <button className="btn btn-light">Login</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;