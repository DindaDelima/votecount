import React from "react"
import { useState,useEffect } from "react"

export default function Amateur(){
    const [randNum1, setRandNum1] = useState(0)
    const [randNum2, setRandNum2] = useState(0)
    const [answer, setAnswer] = useState(0)
    const [correct, setCorrect] = useState(false)

    useEffect(() => {
    const n1 = parseFloat((Math.random() * 10).toFixed(1))
    const n2 = parseFloat((Math.random() * 10).toFixed(1))

    setRandNum1(n1)
    setRandNum2(n2)
    setAnswer(n1+n2)
  }, [])

    const incorrect = [answer+1, answer - 1, answer +0.5,answer]

    function correctAns(selected){
        if(selected == answer){
            setCorrect(true)
        } else{
            setCorrect(false)
        }
    }

    return(
        <div>
            <div>
                <h3>Question 1</h3>
                <p>{randNum1} + {randNum2} = ...</p>
                <div>
                    {incorrect.map((option,index)=> (
                        <button key={index} onClick={()=>correctAns(option)}>
                            {option}
                        </button>
                    ))}
                    {correct? <p>You're correct!</p>:<p>Try again!</p>}
                </div>
                
            </div>
        </div>
    )
}