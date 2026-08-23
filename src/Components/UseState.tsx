import React from "react"

export function UseState(){

    const isGoingOut = true 
    let answer = isGoingOut === true ? "Yes" : "No"

    return<>
    <main>
        <h1>Do i feel like going out tonight?</h1>
     
        <button>{answer}</button>
    </main>

    
    </>
}