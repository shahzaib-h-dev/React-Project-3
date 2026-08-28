import React from "react"
import avatar from "../assets/avatar.jpg"
import { PracticeHeader } from "./PracticeHeader"
import { PracticeBody } from "./PracticeBody"

export function PracticeStateProp(){


    const [userName, setUserName] = React.useState("Shahzaib") 

    return(
      <main>
        <PracticeHeader userName={userName}/>
        <PracticeBody userName={userName}/>
      </main>
    )
}