import React from "react"
import padsData from "./Pads" 
import { ChallengeData } from "./ChallengeData"

export function Challenge({darkMode}: {darkMode: boolean} ){
    
    const [pads, setPads] = React.useState(padsData)

    const styles = {
        backgroundColor: darkMode ? "#222222" : "#cccccc"
    }

    const buttonElements = pads.map(pad => (
        <button 
        style={ styles}
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