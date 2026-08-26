import React from "react"

export function UseState(){
 
    const [isGoingOut ,setIsGoingOut] = React.useState(false)

    function changeMind(){
   setIsGoingOut(prev => !prev)
    }
    
    return<>
    <main>
        <h1>Do i feel like going out tonight?</h1>
     
        <button onClick={changeMind}
         aria-label={'Current answer is ${isGoingOut ? "Yes" : "No"}. Click to change it.'}
        >{isGoingOut ? "Yes" : "No"}</button>
    </main>

    
    </>
}