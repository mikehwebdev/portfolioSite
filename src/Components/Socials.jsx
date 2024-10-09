

import { FaGithub } from "react-icons/fa6"
import { FaLinkedin } from "react-icons/fa6"
import { FaEnvelope } from "react-icons/fa6"

export default function Socials(){
    return (
        <>            
            <a href="https://github.com/mikehwebdev" target="_blank"><FaGithub size="3rem" className="footer-icons"/></a>
            <a href="https://www.linkedin.com/in/michael-hatton-29927b95" target="_blank"><FaLinkedin size="3rem" className="footer-icons"/></a>
            <a href="mailto:michaelhatton_54@hotmail.co.uk" ><FaEnvelope size="3rem" className="footer-icons"/></a>
        </>
    )
}