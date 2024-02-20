import React from "react";
import "./navbar.css";

const Navbar=()=>{
    return(
        <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <a className="navbar-brand" href="#"></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navBar" aria-controls="navBar" aria-expanded="false" aria-label="toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navBar">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item"><a className="nav-link" href="#">Shop</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Men</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Women</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">kids</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;