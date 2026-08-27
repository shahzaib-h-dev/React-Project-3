import React from "react"

export function Practice(){

    const [unreadMessages, setUnreadMessages] = React.useState(["a", "b"])

    return(
        <>
        <div>
            {
            unreadMessages.length > 0 && 
            <h1> You have {unreadMessages.length} unread messages!</h1>
            }

            {
            unreadMessages.length === 0 && 
            <h1> You have no unread messages!</h1>
            }
        </div>
        </>
    )
}