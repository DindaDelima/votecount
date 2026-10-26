// import React, { useState } from "react";
// import NavSec from "./Navsec";
// // import {X} from lucide-react;
// import '../styles/landingpage.css'
// import Votecounter from "./Votecounter";
// import logo from '../assets/kinderfield.png'
// import ModalWinner from "./modal";

// export default function LandingPage(){
//     // const feats = [vote, temp, math]
//     const [showModal, setShowModal] = useState(false);

//     const [felVote, setFelvote] = useState(0);
//     const [matVote, setmatVote] = useState(0);
//     const [warrVote, setWarrVote] = useState(0);

//     const [invalid, setInvalid] = useState(0)
//     const [total, setTotal] = useState(0)

//     const handleInvalid = () => {
//         setInvalid((prevInvalid) => prevInvalid + 1);
//         setTotal((prevTotal) => prevTotal + 1);
//     };

// const handleCancelIn = () => {
//         if (invalid > 0) {
//             setInvalid((prevInvalid) => prevInvalid - 1);
//             setTotal((prevTotal) => prevTotal - 1);
//          }
//     };

//     return(
//         <div className="body">
//             <div>
//             <button class="invalidBtn" role="button" onClick={handleInvalid}>
//                     Invalid Vote <span className="count">{invalid}</span>
//             </button>
//             <button className="cancelIn" onClick={handleCancelIn}>X</button>
//             </div>
//              <img src={logo} alt="" width={100} height={100}/>
//                 <Votecounter
//                     felVote={felVote} 
//                     setFelvote={setFelvote}
//                     matVote={matVote} 
//                     setmatVote={setmatVote}
//                     warrVote={warrVote} 
//                     setWarrVote={setWarrVote}
//                     total={total} 
//                     setTotal={setTotal}/>
//              <div>
//             <h2 className="total">Overall Total Vote: {total}</h2>
//             </div>  
//             <button className="Done" onClick={() => setShowModal(true)}>
//                     Done
//             </button>
//             {showModal && (
//                 <ModalWinner 
//                 c1={felVote} 
//                 c2={matVote} 
//                 c3={warrVote}                
//                 onClose={() => setShowModal(false)} 
//                 />
//             )}
//             <ModalWinner/>
//         </div>
//     )
// }
import React, { useState } from "react";
import NavSec from "./Navsec";
// import { X } from "lucide-react";
import '../styles/landingpage.css';
import Votecounter from "./Votecounter";
import logo from '../assets/kinderfield.png';
import ModalWinner from "./modal";

export default function LandingPage() {
    const [showModal, setShowModal] = useState(false);

    const [felVote, setFelvote] = useState(0);
    const [matVote, setmatVote] = useState(0);
    const [warrVote, setWarrVote] = useState(0);

    const [invalid, setInvalid] = useState(0);
    const [total, setTotal] = useState(0);

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

    return (
        <div className="body">
            <div>
                <button className="invalidBtn" role="button" onClick={handleInvalid}>
                    Invalid Vote <span className="count">{invalid}</span>
                </button>
                <button className="cancelIn" onClick={handleCancelIn}>X</button>
            </div>
            
            <img src={logo} alt="School Logo" width={100} height={100} />
            
            <Votecounter
                felVote={felVote} 
                setFelvote={setFelvote}
                matVote={matVote} 
                setmatVote={setmatVote}
                warrVote={warrVote} 
                setWarrVote={setWarrVote}
                total={total} 
                setTotal={setTotal}
            />

            <div>
                <h2 className="total">Overall Total Vote: {total}</h2>
            </div>  

            <button className="Done" onClick={() => setShowModal(true)}>
                Done
            </button>

            {/* Conditionally rendered modal with props passed */}
            {showModal && (
                <ModalWinner 
                    c1={felVote} 
                    c2={matVote} 
                    c3={warrVote}                
                    onClose={() => setShowModal(false)} 
                />
            )}
        </div>
    );
}