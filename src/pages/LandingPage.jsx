import React, { useState } from "react";
import NavSec from "./Navsec";
// import {X} from lucide-react;
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
        setInvalid((prevInvalid) => prevInvalid + 1);
        setTotal((prevTotal) => prevTotal + 1);
    };

const handleCancelIn = () => {
        if (invalid > 0) {
            setInvalid((prevInvalid) => prevInvalid - 1);
            setTotal((prevTotal) => prevTotal - 1);
         }
    };

    return(
        <div className="body">
            <div>
            <button class="invalidBtn" role="button" onClick={handleInvalid}>
                    Invalid Vote <span className="count">{invalid}</span>
            </button>
            <button className="cancelIn" onClick={handleCancelIn}>X</button>
            </div>
             <img src={logo} alt="" width={100} height={100}/>
            <Votecounter/>
            {/* <Footer /> */}
        </div>
    )
}