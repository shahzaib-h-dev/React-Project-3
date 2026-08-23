import React from "react"

export function UseState(){
    const result = React.useState("Yes")
    console.log(result)

  

    return<>
    <main>
        <h1>Is state important to know</h1>
        <button >{result[0]}</button>
    </main>

    
    </>
}