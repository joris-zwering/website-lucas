import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import {BASEURL} from "../config/api";


export const useFetchPortfolio = (portfolio_id) => {
    const [isLoading, setIsLoading] = useState(true)
    const [portfolio, setPortfolio] = useState()
    
    let url = '';

    if(portfolio_id) {
        url = BASEURL + "/portfolio-items/" + portfolio_id + "?_sort=Big:ASC"
    } else {
        url = BASEURL + "/portfolio-items/" + "?_sort=Big:ASC"
    }
    
    const fetchPortfolio = async() => {
        const fetchAPI = await fetch(url)
        const data = await fetchAPI.json()
        setPortfolio(data)
        setIsLoading(false)
    }
    
    useEffect(() => {
        fetchPortfolio()
    }, [portfolio_id])

    return [isLoading, portfolio]
}
