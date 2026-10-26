import React, { useState } from "react";
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

    const [invalid, setInvalid] = useState(0)

    const handleInvalid = () => {
        setInvalid(invalid + 1)
        setTotal(total + 1)
    }

    return(
        <div className="body">
            <button class="invalidBtn" role="button" onClick={handleInvalid}>
                    Invalid Vote <span className="count">{invalid}</span>
            </button>
             <img src={logo} alt="" width={100} height={100}/>
            <Votecounter/>
            {/* <Footer /> */}
        </div>
    )
}