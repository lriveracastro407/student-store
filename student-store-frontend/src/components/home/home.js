import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import Welcome from "../welcome/welcome";
import Productgrid from "../productgrid/productgrid";
import About from "../about/about";
import Navbar from "../navbar/navbar";
import "./home.css"

export default function Home ( {products, isfetching }){
    return (
        <div className="home">
            < Navbar />
            <Welcome />
            <About />
            <Productgrid
                productslist = {products}
                isfetching = {isfetching} 
            />
        </div>
    )
}