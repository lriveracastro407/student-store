import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import Welcome from "../welcome/welcome";
import Productgrid from "../productgrid/productgrid";
import About from "../about/about";
import Navbar from "../navbar/navbar";
import "./home.css"

export default function Home ( {products }){
    return (
        <div id="home" className="home">
            {console.log(products)}
            < Navbar />
            <Welcome />
            <About />
            <Productgrid products = {products}
            />
        </div>
    )
}