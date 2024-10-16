import { useState } from "react"
import { Link } from "react-router-dom"
import { VscCode } from "react-icons/vsc"
import Socials from "./Socials"


export default function Header(){

    const [toggled, setToggled] = useState(false)

    function toggleMenu(){
        setToggled(prev => !prev)

    }

    return (
        <header className="header">
            <Link to="/"><VscCode size="5rem" className="main-logo"/></Link> 
            
                <div onClick={toggleMenu} className="hamburger-btn">
                    <svg className="burger-menu" width="100" viewBox="0 0 100 100">
                        <rect className={`line top ${toggled? "expanded" : ''}`} width="80" height="8" x="10" y="25" rx="5"></rect>
                        <rect className={`line middle ${toggled? "expanded" : ''}`} width="80" height="8" x="10" y="45" rx="5"></rect>
                        <rect className={`line bottom ${toggled? "expanded" : ''}`} width="80" height="8" x="10" y="65" rx="5"></rect>
                    </svg>
                </div>
                    <ul className={`nav-menu ${toggled? 'menu-visible' : ''}`} onClick={toggleMenu}>
                        <Link to="/" className="nav-link" >Home</Link>
                        <Link to="/About" className="nav-link">About</Link>
                        <Link to="/Skills" className="nav-link">Skills</Link>
                        <Link to="/Projects" className="nav-link">Projects</Link>
                        <Link to="/CV" className="nav-link">Interactive CV</Link>
                        <Link to="/HorrorFlicks" className="nav-link">Horror Flicks</Link>
                        <div className="nav-socials">
                            <Socials />
                        </div>
                    </ul>
        </header>
    )
}

