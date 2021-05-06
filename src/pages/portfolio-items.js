import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer"; 
import {BASEURL} from "../config/api";
import {useFetchPortfolio} from "../hooks/useFetchPortfolio";


export function SmallComponent({titel, url, opdrachtgever, preview, categorie}) {
    return(
        <div className="animated animatedFadeInUp fadeInUp" style={{ marginBottom: 100, gridColumnEnd: "span 1"}}>
            <div>
                <div style={{backgroundColor: "#fff", overflow: 'overlay', display: "block", width: "fit-content", marginLeft: 20, padding: "3px 15px", borderRadius: 20}}>
                    <p style={{fontWeight: 500, color: "#000", zIndex: 100, margin: 0}}>{categorie}</p>
                </div>
                <img className="portfolio-items-img" style={{marginTop: -50, width: "100%", borderRadius: 6, height: 350, objectFit: "cover"}} src={preview}></img>
            </div>
            <div style={{marginTop: 16}}>
                <Link to={url}>
                    <h4 style={{fontWeight: 400}}>Opdrachtgever {opdrachtgever}</h4>
                    <h2>{titel}</h2>
                </Link>
            </div>
        </div>
    )
}

function BigComponent({titel, url, opdrachtgever, preview, categorie}) {
    return(
        <div className="animated animatedFadeInUp fadeInUp" style={{width: "100%", gridColumnEnd: "span 2", marginBottom: 100}}>
            <div>
                <div style={{backgroundColor: "#fff", overflow: 'overlay', display: "block", width: "fit-content", marginLeft: 20, padding: "3px 15px", borderRadius: 20}}>
                    <p style={{fontWeight: 500, color: "#000", zIndex: 100, margin: 0}}>{categorie}</p>
                </div>
                <img className="portfolio-items-img"  style={{marginTop: -50, width: "100%", borderRadius: 6, height: 350, objectFit: "cover"}} src={preview}></img>
            </div>
            <div style={{marginTop: 16}}>
                <Link to={url}>
                    <h4 style={{fontWeight: 400}}>Opdrachtgever {opdrachtgever}</h4>
                    <h2>{titel}</h2>
                </Link>
            </div>
        </div>
    )
}

function PortfolioItems() {
    const [isLoading, portfolio] = useFetchPortfolio();

    console.log(portfolio)

    return(
        <div className="portfolio-container" style={{paddingLeft: "15%", paddingRight: "15%", zIndex: 30}}>
            <Navbar></Navbar>
            {!isLoading && 
            <div className="animated animatedFadeInUp fadeInUp portfolio-items-title" style={{paddingTop: 260}}>
                <div>
                    <h1>Recente klussen die ik gedaan heb<br></br>als filmmaker & fotograaf</h1>
                </div>
                <div className="portfolio-filter" style={{display: "flex", marginTop: 30}}>
                    <div style={{padding: "6px 12px", borderRadius: 6, marginRight: 14, backgroundColor: "#fff", color: "#000"}}>
                        <h4>Alle</h4>
                    </div>
                    <div style={{padding: "6px 12px", border: "1px solid #646464", borderRadius: 6, marginRight: 14}}>
                        <h4>Commercials</h4>
                    </div>
                    <div style={{padding: "6px 12px", border: "1px solid #646464", borderRadius: 6, marginRight: 14}}>
                        <h4>Muziekvideo's</h4>
                    </div>
                    <div style={{padding: "6px 12px", border: "1px solid #646464", borderRadius: 6}}>
                        <h4>Fotografie</h4>
                    </div>
                </div>
                <div className="portfolio-item-list" style={{display: "grid", marginTop: 140, gridTemplateColumns: "auto auto", gridColumnGap: "55px"}}>
                    {portfolio && portfolio.map((portfolio, index) => {
                        if(portfolio.Big) {
                            return(
                                <BigComponent
                                titel={portfolio.Titel}
                                url={`/portfolio/${portfolio.id}`}
                                opdrachtgever={portfolio.Opdrachtgever}
                                preview={portfolio.Preview_Still['url']}
                                key={index}
                                categorie={portfolio.Categorie}
                                />
                            )
                        } else {
                            return(
                                <SmallComponent
                                titel={portfolio.Titel}
                                url={`/portfolio/${portfolio.id}`}
                                opdrachtgever={portfolio.Opdrachtgever}
                                preview={portfolio.Preview_Still['url']}
                                key={index}
                                categorie={portfolio.Categorie}
                                />
                            )
                        }
                    })}
                </div>
                <Footer></Footer>
            </div>
            }
        </div>
    )
}


export default PortfolioItems;