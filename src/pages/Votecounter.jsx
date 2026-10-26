import React from "react";
import '../styles/vote.css';

export default function Votecounter({
  felVote, setFelvote,
  matVote, setmatVote,
  warrVote, setWarrVote,
  total, setTotal
}) {

  // Increment Handlers
  const handleFelVote = () => {
    setFelvote(prev => prev + 1);
    setTotal(prev => prev + 1);
  };
    
  const handleMatVote = () => {
    setmatVote(prev => prev + 1);
    setTotal(prev => prev + 1);
  };

  const handleWarrVote = () => {
    setWarrVote(prev => prev + 1);
    setTotal(prev => prev + 1);
  };

  // Decrement Handlers (Prevents negative numbers)
  const cancelFelVote = () => {
    if (felVote > 0 && total > 0) {
      setFelvote(prev => prev - 1);
      setTotal(prev => prev - 1);
    }
  };

  const cancelMatVote = () => {
    if (matVote > 0 && total > 0) {
      setmatVote(prev => prev - 1);
      setTotal(prev => prev - 1);
    }
  };

  const cancelWarrVote = () => {
    if (warrVote > 0 && total > 0) {
      setWarrVote(prev => prev - 1);
      setTotal(prev => prev - 1);
    }
  };

  return (
    <div className="container">
      <div className="title">
        <h3>HIGHFIELD SCHOOL BEKASI</h3>
        <h4>STUCO ELECTION DIGITAL VOTE COUNTER</h4>
        <h4 className="year">2026-2027</h4>
      </div>

      <div className="candi">
        <button className="canBtn" onClick={handleFelVote}>CANDIDATE 1</button>
        <button className="canBtn" onClick={handleMatVote}>CANDIDATE 2</button>
        <button className="canBtn" onClick={handleWarrVote}>CANDIDATE 3</button>
      </div>

      <div className="cancelBtn">
        <button className="cancel" onClick={cancelFelVote}>CANCEL 1</button>
        <button className="cancel" onClick={cancelMatVote}>CANCEL 2</button>
        <button className="cancel" onClick={cancelWarrVote}>CANCEL 3</button>
      </div>

      <div className="result">
        <div className="canGroup">
          <label className="label">Felix-Erick</label>
          <input 
            className="resBox"
            type="text"
            value={felVote} 
            readOnly 
          />
        </div>
        
        <div className="canGroup">
          <label className="label">Matthew-Renata</label>
          <input 
            className="resBox"
            type="text"
            value={matVote} 
            readOnly 
          />
        </div>

        <div className="canGroup">
          <label className="label">Warren-Kenzie</label>
          <input 
            className="resBox"
            type="text"
            value={warrVote} 
            readOnly 
          />
        </div>    
      </div>
    </div>
  );
}