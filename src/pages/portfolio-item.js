import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer"; 
import {BASEURL} from "../config/api";
import { Carousel } from 'react-responsive-carousel';
import {useFetchPortfolio} from "../hooks/useFetchPortfolio";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {SmallComponent} from "./portfolio-items";

function ReviewComponent({ReviewOpdrachtgever, NaamReviewer}) {
    return(
        <div style={{padding: "30px 30px", backgroundColor: "#151515", borderRadius: 9, marginTop: 20}}>
            <p>{ReviewOpdrachtgever}</p>
            <h4 style={{marginTop: 10}}>{NaamReviewer}</h4>
        </div>
    )
}

function PortfolioItem() {
    let { id } = useParams();
    const [isLoading, portfolio] = useFetchPortfolio(id);
    const [stillLoading, otherPortfolio] = useFetchPortfolio();

    useEffect(() => {
        console.log(id)
        if(portfolio) {
            console.log(portfolio)
        }
        if(otherPortfolio) {
            console.log(otherPortfolio)
        }
        console.log(otherPortfolio)
    }, [])

    if(isLoading) {
        return(
            <Navbar/>
        )
    }

    return(
        <>
        <div style={{height: 700, width: "100vw"}} >
            <div style={{ width: "100%", position: "absolute", zIndex:"-10"}}>
                <Carousel showStatus={false} showArrows={false} autoPlay infiniteLoop  showThumbs={false} swipeable emulateTouch swipeable useKeyboardArrows axis="horizontal" >
                    {portfolio && portfolio.Stills.map((Stills, index) => {
                        return(
                            <div key={index}>
                                <img style={{height: 700, objectFit: "cover"}} src={Stills.formats.large.url}></img>
                            </div>
                        )
                    })}
                </Carousel>
            </div>
            <div style={{paddingLeft: "7%", paddingRight: "7%", zIndex:"100"}}>
                <Navbar/>
            </div>
            <div className="animated animatedFadeInUp fadeInUp" style={{width: "100%", position: "absolute",  height: 700, display: "flex", top: "0px", zIndex: "-10"}}>
                <div style={{position: "absolute", bottom: 50, color: "#fff", backgroundColor: "#000", borderRadius: 16, padding: "30px 40px", marginLeft: "6%"}}>
                    <h2>{portfolio.Titel}</h2>
                    <h4>Opdrachtgever <span style={{color: "#00A0E2"}}>{portfolio.Opdrachtgever}</span></h4>
                </div>
            </div>
        </div>
        <div className="animated animatedFadeInUp fadeInUp" style={{paddingLeft: "11%", paddingRight: "11%"}}>
                <div style={{display: "flex", alignItems: "center", marginTop: 40, color: "#939393"}}>
                    <Link style={{display: "flex", alignItems: "center"}} to="/portfolio">
                    <img style={{height: 34, marginRight: 13}} src="/back-arrow-icon.png"></img>
                    <h4>Terug naar alle items</h4>
                    </Link>
                </div>
                <div style={{display: "flex",  marginTop: 40, color: "#939393"}}>
                    <span>Briefing</span>
                    <div style={{borderLeft: "1px solid #939393", height: "100%", paddingLeft: 20, marginLeft: 40, color: "#fff", maxWidth: "700px"}}>
                        <p style={{lineHeight: "27px"}}>{portfolio.Briefing}</p>
                    </div>
                </div>
                <div style={{display: "flex",  marginTop: 40, color: "#939393"}}>
                    <span>Crew</span>
                    <div style={{borderLeft: "1px solid #939393", height: "100%", paddingLeft: 20, marginLeft: 58, color: "#fff", maxWidth: "50%"}}>
                        <p style={{}}>{portfolio.Crew}</p>
                    </div>
                </div>
        </div>
        <div style={{paddingLeft: "11%", paddingRight: "11%"}}>
            <div className="portfolio-body-responsive" style={{marginLeft: "100px", marginTop: 70, width: "794px"}}>
                <h2>Resultaat</h2>
                {portfolio.Video && 
                    <video muted={true} controls  style={{width: "100%", maxWidth: "1000px", marginTop: 20, borderRadius: 6, height: "80%"}}>
                        <source src={portfolio.Video.url}></source>
                    </video>
                }
                <div>
                    <h2 style={{marginTop: 70, marginBottom: 10}}>Het proces</h2>
                    <p style={{maxWidth: "900px", lineHeight: "27px"}}>
                        {portfolio.Proces}
                    </p>
                </div>
                <div style={{height: "1px", width: "100%", backgroundColor: "#707070", marginTop: 60, marginBottom: 60}}>
                </div>
                <div>
                    <h2 style={{marginTop: 70, marginBottom: 10}}>Dit vond de opdrachtgever</h2>
                    <ReviewComponent
                    ReviewOpdrachtgever={portfolio.Review_opdrachtgever}
                    NaamReviewer={portfolio.Naam_van_reviewer}
                    />
                </div>
                <div style={{display: "grid", marginTop: 100, gridTemplateColumns: "auto auto", gridColumnGap: "55px"}}>
                </div>
            </div>
        </div>
        <Footer></Footer>
        </>
    )
}

export default PortfolioItem