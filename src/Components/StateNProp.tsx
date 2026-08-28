import React from "react"
import { Count } from "./Count"

export function StateNProp() {
    const [count, setCount] = React.useState(0)

    function add() {
        setCount(prevCount => prevCount + 1)
    }

    function subtract() {
        setCount(prevCount => prevCount - 1)
    }

    return (
        <>
            <main className="counter-wrapper">
                <div className="counter">
                    <button 
                        className="counter--button minus"
                        onClick={subtract} 
                        aria-label="Decrease count"
                    >
                        -
                    </button>
                    
                    <div className="counter--count">
                        <Count number={count}/>
                    </div>
                    
                    <button 
                        className="counter--button plus"
                        onClick={add} 
                        aria-label="Increase count"
                    >
                        +
                    </button>
                </div>
            </main>
        </>
    )
}