import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Navbar() {
    return(
        <div className="navbar" style={{display: "flex", flexDirection: "row", alignContent: "center", justifyContent: "space-between"}}>
                <Link to="/" style={{display: "flex", alignItems: "center", color: "#fff", textDecoration: "none"}}>
                    <img style={{height: 30, marginRight: 10}} src="/lightframers_logo.png"></img>
                    <h4>Lightframers</h4>
                </Link>
            <div>
                <ul className="navigation" style={{display: "flex", listStyle: "none"}}>
                    <Link to="/portfolio" style={{color: "#fff", textDecoration: "none"}}><li style={{marginRight: 20}}>Portfolio</li></Link>
                    <Link to="/about" style={{color: "#fff", textDecoration: "none"}}><li style={{marginRight: 20}}>About</li></Link>
                    <Link to="/contact" style={{color: "#fff", textDecoration: "none"}}><li style={{}}>Contact</li></Link>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;