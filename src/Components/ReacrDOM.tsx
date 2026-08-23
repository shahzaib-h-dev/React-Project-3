import claudeLogo from "../assets/logo.jpg"

export function ReactDOM(){
    function handleClick(){
        console.log("I was clicked!")
    }
    function handleMouseOver(){
        console.log("I was hovered!")
    }

    return(
    <>
    <main>
        <img src={claudeLogo} alt="" 
        onMouseOver={handleMouseOver}
        />
        <button onClick={handleClick}>Click Me</button>
    </main>
  
    
    </>
    )
}
