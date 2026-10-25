import React from "react"
import '../styles/footer.css'
export default function Footer(){
    const sections = ["Me", "Projects", "Social Media"]

    return(
        <div>
            <div className="footCont">
                <div className="sections">
                    <div>
                        <h4>Me</h4>
                        <p>About me</p>
                    </div>
                    <div>
                        <h4>Projects</h4>
                        <p>Digital Vote Counter</p>
                        <p>Temperature Converter</p>
                        <p>Math Quiz</p>
                    </div>
                    <div>
                        <h4>Social Media</h4>
                        <p>X</p>
                        <p>Instagram</p>
                        <p>LinkedIn</p>
                    </div>
               </div>
               
            </div>
        </div>
    )
}