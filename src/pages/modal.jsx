import React from "react";
import '../styles/modal.css'
import theo from '../assets/theodore.png'

export default function ModalWinner({ c1 = 0, c2 = 0, c3 = 0, onClose }) {
  const maxVotes = Math.max(c1, c2, c3);

  const getWinnerText = () => {
    // If no votes have been cast yet
    if (maxVotes === 0) return "No votes cast yet";

    const winners = [];
    if (c1 === maxVotes) winners.push("Felix and Erick");
    if (c2 === maxVotes) winners.push("Matthew and Renata");
    if (c3 === maxVotes) winners.push("Warren and Kenzie");

    // Handle ties gracefully
    if (winners.length > 1) {
      return `TIE BETWEEN: ${winners.join(" & ")}`;
    }

    return winners[0];
  };

  const voteWinner = getWinnerText();

  return (
    <div className="modalOverlay">
      <div className="modalContainer">
        <h3>Congratulations!</h3>
        <img src={theo} alt="" className="modalTheo" width={120} height={110}/>
        <h4>HIGHEST VOTE IS: {voteWinner.toUpperCase()}</h4>
        {maxVotes > 0 && <p>Total Votes: {maxVotes}</p>}
        
        {onClose && (
          <button className="close-btn" onClick={onClose}>
            Close
          </button>
        )}
      </div>
    </div>
  );
}