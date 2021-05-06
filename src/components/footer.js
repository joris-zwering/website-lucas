import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Footer() {
    return(
        <div style={{justifyContent: "center", display: "flex", marginTop: 150, marginBottom: 30}}>
            <div style={{textAlign: "center"}}>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <a href="https://www.instagram.com/lucas_snijder_/"><img style={{height: 30, width: 30, marginRight: 20}} src="/instagram-logo.png"></img></a>
                    <a><img style={{height: 30, width: 30}} src="/linkedin-logo.png"></img></a>
                </div>
                <h5 style={{marginTop: 20}}>Created with ❤️  by Joris</h5>
            </div>
        </div>
    )
}

export default Footer;