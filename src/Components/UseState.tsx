import React from "react"

export function UseState(){

  const [count, setCount] = React.useState(0)

  function add(){
    setCount(prevCount =>prevCount + 1)
  }

  function deduct(){
  setCount(prevCount =>prevCount - 1)
  }
    return<>
    <main>
        <h1>How mamy times will ob say "state" in this section?</h1>
        <div>
     
        <button aria-label="Decrease" onClick={deduct}>-</button>
        <h2>{count}</h2> 
        <button aria-label="Increase" onClick={add}>+</button> 
        </div>
        
    </main>

    
    </>
}