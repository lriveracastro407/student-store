import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import Productgrid from "../productgrid/productgrid";
import About from "../about/about";
import Navbar from "../navbar/navbar";
import "./home.css"

export default function Home ( {products }){
    const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const locations = document.querySelector(location.hash)
      if (locations) {
        locations.scrollIntoView({ behavior: "smooth" })
      }
      
    }

    return () => {
    }
   
  }, [location.hash])
    
    return (
        <div id="home" className="home">
            {console.log(products)}
            < Navbar />
           
            <About />
            <Productgrid products = {products}
            />
        </div>
    )
}