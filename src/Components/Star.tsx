import starFilled from "../assets/filled.png"
import starEmpty from "../assets/empty.png"

export function Star(props: any){

        let starIcon = props.isFilled ? starFilled : starEmpty 
    return(
        <>
         <button 
                onClick={props.handleClick}        
                aria-pressed={props.isFilled}
                aria-label={props.isFilled ? "Remove from favorite" : "Add to favorite"}
                className="favorite-button"
         >
        <img 
                src={starIcon}
                alt={props.isFilled ? "Remove from Favorite" : "Add to favorites"}
                className="favorite-icon"
         />
         </button>
        </>
    )
}