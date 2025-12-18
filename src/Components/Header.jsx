import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { VscCode } from "react-icons/vsc"
import Socials from "./Socials"
import { useToggler } from "../Hooks/useToggler"


// Navigation items configuration - single source of truth
const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About me" },
    { to: "/projects", label: "Projects" },
    { to: "/cv", label: "Interactive CV" },
    { to: "/widgets", label: "Widgets" }
]

// *** Header component *** - main navigation with mobile and desktop menus
export default function Header() {

    // Track mobile navigation menu open/closed state
    const [navMenu, toggleNavMenu] = useToggler(false)

    return (
        <header className="header">
            {/* Logo link - navigates to home page */}
            <Link to="/" className="main-logo-link">
                <VscCode size="5rem" className="main-logo" />
            </Link>

            {/* Hamburger menu button - toggles mobile nav visibility */}
            <div onClick={toggleNavMenu} className="hamburger-btn" role="button" aria-label="Toggle navigation menu">
                <svg className="burger-menu" width="100" viewBox="0 0 100 100" aria-hidden="true">
                    {/* Hamburger menu lines that animate on toggle */}
                    <rect className={`line top ${navMenu ? "expanded" : ''}`} width="80" height="8" x="10" y="25" rx="5"></rect>
                    <rect className={`line middle ${navMenu ? "expanded" : ''}`} width="80" height="8" x="10" y="45" rx="5"></rect>
                    <rect className={`line bottom ${navMenu ? "expanded" : ''}`} width="80" height="8" x="10" y="65" rx="5"></rect>
                </svg>
            </div>

            {/* Mobile navigation menu - shown/hidden based on navMenu state */}
            <nav className={`nav-menu ${navMenu ? 'menu-visible' : ''}`} onClick={toggleNavMenu} role="navigation" aria-label="Mobile navigation">
                {/* Map through navItems to render mobile links */}
                {navItems.map(item => (
                    <Link to={item.to} className="nav-link" key={item.to}>
                        {item.label}
                    </Link>
                ))}
                {/* Social media links in mobile menu */}
                <div className="nav-socials">
                    <Socials />
                </div>
            </nav>

            {/* Desktop navigation menu - visible on larger screens */}
            <nav className="nav-menu-large" role="navigation" aria-label="Main navigation">
                {/* Map through navItems to render desktop links with active state */}
                {navItems.map(item => (
                    <NavLink 
                        to={item.to} 
                        className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'}
                        key={item.to}
                    >
                        {item.label}
                    </NavLink>
                ))}
            </nav>
        </header>
    )
}

