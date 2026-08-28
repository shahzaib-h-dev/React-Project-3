import avatar from "../assets/avatar.jpg"

export function PracticeHeader(props:any){

    return(
    <header>
        <img src={avatar}/>
        <p>{props.userName}</p>
    </header>
    )
}