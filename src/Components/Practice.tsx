import React from "react"

export function Practice(){

    const [massages, setMessages] = React.useState(["a", "b"])

function determineText(){

    if (massages.length ==0){
       return  "you're all caught up!"
    } else if (massages.length ===1){
       return "You have 1 unread message"
    } else {
       return `You have ${massages.length} unread messages`
    }
}

    return(
        <>
        <div>
          
          <h1>{determineText()}</h1>
         
        </div>
        </>
    )
}