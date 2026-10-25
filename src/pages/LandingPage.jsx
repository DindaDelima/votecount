import React from "react";
import NavSec from "./Navsec";
import '../styles/landingpage.css'
import Footer from "./footer";
import vote from '../assets/vote.png'
import temp from '../assets/temp.png'
import math from '../assets/math-diagrams-and-tools-math-class-concept-illustration-vector.jpg'
import Votecounter from "./Votecounter";
import logo from '../assets/kinderfield.png'

export default function LandingPage(){
    // const feats = [vote, temp, math]

    return(
        <div className="body">
             <img src={logo} alt="" width={100} height={100}/>
            <Votecounter/>
            {/* <Footer /> */}
        </div>
    )
}