import React from "react";
import {useState} from "react";
import '../styles/vote.css'
// import logo from './assets/kinderfield.png'

export default function Votecounter() {
    const [felVote, setFelvote] = useState(0);
    const [matVote, setmatVote] = useState(0);
    const [WarrVote, setwarrVote] = useState(0);
    const [total, setTotal] = useState(0);
    

    const handleFelVote = () => {
        setFelvote(felVote + 1)
        setTotal(total + 1)
    }
    
    const handleMatVote = () => {
        setmatVote(matVote + 1)
        setTotal(total + 1)
    }
   const handleWarrVote = () => {
        setwarrVote(WarrVote + 1)
        setTotal(total + 1)
    }
    const cancelFelVote = () => {
        // setPop(true)
        if(felVote <= 0 && total <= 0){
            setFelvote(felVote)
            setTotal(total)
        } else{
            setFelvote(felVote - 1)
            setTotal(total - 1)
        }    
    }

    const cancelMatVote = () => {
        if(matVote <= 0 && total <= 0){
            setmatVote(matVote)
            setTotal(total)
        } else{
            setmatVote(matVote - 1)
            setTotal(total - 1)
        }   
    }

    const cancelWarrVote = () =>{
        if(WarrVote <= 0 && total <= 0){
            setwarrVote(WarrVote)
            setTotal(total)
        } else{
            setwarrVote(WarrVote - 1)
            setTotal(total - 1)
        }
    }
            
    const PopUp = () => {
      return(
        <div>
          <h3>Are you sure you want to substract {candidates[0]}</h3>
          <div className="btnConfirm">
            {/* <button >Yes</button>
            <button >No</button> */}
          </div>
        </div>
      )
    }

  return(
      <div className="container">
          <div className="title">
            {/* <img src={logo} width={80} height={80} alt="" />  */}
            <h3>HIGHFIELD SCHOOL BEKASI</h3>
              <h4>STUCO ELECTION DIGITAL VOTE COUNTER</h4>
              <h4 className="year">2026-2027</h4>
          </div>
          <div className="candi">
              <button className="canBtn" onClick={handleFelVote}>CANDIDATE 1</button>
              <button className="canBtn" onClick={handleMatVote}>CANDIDATE 2</button>
              <button className="canBtn"onClick={handleWarrVote}>CANDIDATE 3</button>
          </div>
          <div className="cancelBtn">
              <button className="cancel" onClick={cancelFelVote}>CANCEL 1</button>
              <button className="cancel" onClick={cancelMatVote}>CANCEL 2</button>
              <button className="cancel"onClick={cancelWarrVote}>CANCEL 3</button>
          </div>
          <div className="result">
              <div className="canGroup">
                <label className="label">Felix-Erick</label>
                <input className="resBox"
                  type='text'
                  value ={felVote} readOnly></input>
              </div>
              
              <div className="canGroup">
                <label className="label">Matthew-Renata</label>
                <input className="resBox"
                  type='text'
                  value={matVote} readOnly></input>
              </div>
              <div className="canGroup">
                  <label className="label">Warren-Kenzie</label>
                  <input className="resBox"
                  type='text'
                  value={WarrVote} readOnly></input>
              </div>    
          </div>
          <div>
            <h2 className="total">Overall Total Vote: {total}</h2>
            </div>  
            {/* {pop ? <PopUp/> :null} */}
      </div>
  )
}