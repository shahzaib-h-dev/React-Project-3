import React from "react"
import avatar from "../assets/avatar.jpg"
import { Star } from "./Star"



export function Card(){
    const [contact, setContact] = React.useState({
        firstName: "Shahzaib",
        lastName: "Hassan",
        phone: "+92 319 0797772",
        email: "shahzaibdiraj480@gmail.com",
        isFavorite: true
    })



    function toggleFavorite(){
        setContact(prevContact => {
            return { ...prevContact, isFavorite: !prevContact.isFavorite }
        })
        console.log("Toggle Favorite")
    }

    return(
        <>
        <main className="card-wrapper">
            <article className="contact-card">
                <img 
                    src={avatar}
                    className="avatar"
                    alt="User avatar"
                />
                <div className="contact-info">
                   <Star isFilled={contact.isFavorite} handleClick={toggleFavorite}/>
                    <h2 className="contact-name">{contact.firstName} {contact.lastName}</h2>
                    <p className="contact-detail">{contact.phone}</p>
                    <p className="contact-detail">{contact.email}</p>
                </div>
            </article>
        </main>
        </>
    )
}