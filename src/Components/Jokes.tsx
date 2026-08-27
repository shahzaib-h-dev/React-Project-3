import React from "react"

export function Jokes(props: any){

    const [isShown, setIsShown] = React.useState(false)

 
    function toggleShown(){
        setIsShown(prevShown => !prevShown)
    }

    return(
        <>
         <div>
            {props.setup && <h3>{props.setup}</h3> }
            { isShown === true && <p>{props.punchline}</p>}
            <button onClick={toggleShown}>Show punchline</button>
         </div>

        </>
    )
}