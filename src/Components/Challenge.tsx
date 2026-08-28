import React from "react"
import padsData from "./Pads"

export function Challenge(){
    
    const [pads, setPads] = React.useState(padsData)

    const buttonElements = pads.map(pad => (
        <button 
            key={pad.id}
            className="pad-button" 
        ></button>
    ))

    return(
        <main className="main-container"> 
            <div className="pad-grid">
                {buttonElements}
            </div>
        </main>
    )
}