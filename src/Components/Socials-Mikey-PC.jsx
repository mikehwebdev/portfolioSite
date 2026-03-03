// Import icon components from react-icons
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload  } from "react-icons/fa6"

// Social media links configuration - single source of truth
const socialLinks = [
    { 
        url: "https://github.com/mikehwebdev", 
        Icon: FaGithub, 
        label: "GitHub",
        external: true
    },
    { 
        url: "https://www.linkedin.com/in/michael-hatton-29927b95", 
        Icon: FaLinkedin, 
        label: "LinkedIn",
        external: true
    },
    { 
        url: "mailto:michaelhatton_54@hotmail.co.uk", 
        Icon: FaEnvelope, 
        label: "Email",
        external: false
    },
    { 
        url: "/Michael Hatton CV.pdf", 
        Icon: FaDownload, 
        label: "CV",
        external: false,
        download: "Michael Hatton CV.pdf"
    }
]

// *** Socials component *** - displays social media links
export default function Socials() {
    return (
        <>
            {/* Map through social links to render each link */}
            {socialLinks.map(({ url, Icon, label, external, download }) => (
                <a 
                    key={label}
                    href={url} 
                    target={external ? "_blank" : ''}
                    rel={external ? "noopener noreferrer" : ''}
                    aria-label={label}
                    download={download}

                >
                    <Icon size="3rem" className="footer-icons" />
                </a>
            ))}
        </>
    )
}