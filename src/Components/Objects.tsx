import React from "react"
import avatar from "../assets/avatar.jpg"
import starFilled from "../assets/filled.png"
import starEmpty from "../assets/empty.png"

export function Objects(){
    const [contact, setContact] =React.useState({
        firstName: "Shahzaib",
        lastName: "Hassan",
        phone: "03190797772",
        email: "shahzaibdiraj480@gmail.com",
        isFavrorite: false
    })

    let starIcon = contact.isFavrorite ? starFilled :starEmpty 

    function toggleFavorite(){
        setContact(prevContact => {
            return{ ...prevContact,isFavrorite: !prevContact.isFavrorite}
        })
        console.log("Toggle Favorite")
    }

    return(
        <>
        <main>
            <article>
                <img src={avatar}
                className="avatar"
                />
                <div className="Info">
                 <button onClick={toggleFavorite}
                 aria-pressed = {contact.isFavrorite}
                 aria-label= {contact.isFavrorite ? "Remove from favorite" : "Add to favorite"}
                 className="favorite-button">
                  <img src={starIcon}
                  alt={contact.isFavrorite ? "Remove from Favorite" : "Add to favorites"}
                  className="favorite"
                  />
                 </button>
                 <h2>{contact.firstName} {contact.lastName}</h2>
                 <p>{contact.phone}</p>
                 <p>{contact.email}</p>
                </div>
            </article>
        </main>
        </>
    )
}