import React from "react"

export function UseState(){
    const [result, func] = React.useState("Yes")
    console.log(result)

  

    return<>
    <main>
        <h1>Is state important to know</h1>
        <button >{result}</button>
    </main>

    
    </>
}