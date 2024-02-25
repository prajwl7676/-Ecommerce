import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.png"
import { NavLink } from "react-router-dom";
import cart_icon from "../../assets/cart_icon.png";
const Navbar=()=>{

    const [menu, setMenu]=useState('shop')
    return(
        <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <a className="navbar-brand" href="#"><img src={logo}></img></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navBar" aria-controls="navBar" aria-expanded="false" aria-label="toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navBar">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item" onClick={()=>{setMenu("shop")}}><NavLink to="/" className="nav-link">Shop</NavLink>{menu==="shop"?<hr></hr>:<></>}</li>
                        <li className="nav-item" onClick={()=>{setMenu("mens")}}><NavLink to="/mens" className="nav-link">Mens</NavLink>{menu==="mens"?<hr></hr>:<></>}</li>
                        <li className="nav-item" onClick={()=>{setMenu("womens")}}><NavLink to="/womens" className="nav-link">Womens</NavLink>{menu==="womens"?<hr></hr>:<></>}</li>
                        <li className="nav-item" onClick={()=>{setMenu("kids")}}><NavLink to="/kids" className="nav-link">Kids</NavLink>{menu==="kids"?<hr></hr>:<></>}</li>
                    </ul>
                    <div className="login_btn">
                        <NavLink to="/login"><button className="btn btn-light">Login</button></NavLink>
                        <NavLink to="/cart"><img src={cart_icon}/></NavLink>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;