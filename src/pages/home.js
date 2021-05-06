import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from "../components/navbar";

function HomePage() {
    return(
        <div>
            <div style={{position: "absolute", display: "flex", width: "100vw"}}>
            </div>
            <div style={{paddingLeft: "5%", paddingRight: "5%", zIndex: 30}}>
                <Navbar></Navbar>
            </div>
            <div style={{width: "100%", position: "fixed", bottom: 40, display: "flex", justifyContent: "center"}}>
                <div style={{border: "1px solid #fff", width: 200, borderRadius: 20, padding: "7px 7px"}}>
                    <h4 style={{textAlign: "center"}}>Bekijk showcase</h4>
                </div>
            </div>
        </div>
    )
}

export default HomePage;