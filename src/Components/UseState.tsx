import React from "react"

export function UseState(){
  let [isImportant, setIsImportant] = React.useState("Yes")

  function handleClick(){
    setIsImportant("Heck Yes")
  }
  

    return<>
    <main>
        <h1>Is state important to know</h1>
        <button onClick={handleClick}>{isImportant}</button>
    </main>

    
    </>
}