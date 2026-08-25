import React from "react" 
 
 export function Array(){

   const [myFavoriteThings, setMyFavoriteThings] = React.useState<string[]>([]);
    const allFavoriteThings = ["rose", "lemon", "apple", "mango"]
    const thingsElements = myFavoriteThings.map(thing => <p key={(thing)}>{thing}</p>)
    
    function addFavoriteThing(){
        setMyFavoriteThings(prevFavThings =>[...prevFavThings, allFavoriteThings[prevFavThings.length]!])
    }
    return(
        <>
        <main>
            <button onClick={addFavoriteThing}>Add Item</button>
            <section aria-live="polite">{thingsElements}</section>
        </main>
        </>
    )
}