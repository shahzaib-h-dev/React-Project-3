import claudeLogo from "../assets/logo.jpg"

export function Header(){
    return<>
    <header className="headerr">
     <img src={claudeLogo} alt="chef claude logo" className="logoImage" />
     <h2 className="headerHeading">Chef Claude</h2>
    </header>
    
    </>
}