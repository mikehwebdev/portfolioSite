import { HiMiniPlay } from "react-icons/hi2"
import { useState } from "react"
import { useToggler } from "../Hooks/useToggler"
import { useScrollToTop } from '../Hooks/useScrollToTop'
// Import dog images for gallery widget
import dog1 from "../imgs/dog1.jpg"
import dog2 from '../imgs/dog2.jpg'
import dog3 from '../imgs/dog3.jpg'
// Import TikTok logo for social widget
import tikTok from '../imgs/Tiktok_Logo.png'
// Import Vault Boy image for hacking widget
import vaultboy from '../imgs/vaultboy.jpg'

// *** Widgets page component *** - displays widgets created to showcase skills
export default function Widgets() {

    // Scroll to top of page when component mounts
    useScrollToTop()

    // State for Netflix-style play next button 
    const [playNext, togglePlayNext] = useToggler(false)
    // State for neon effect
    const [neon, toggleNeon] = useToggler(false)
    // State for computer screen hacking widget visibility
    const [computerScreen, toggleComputerScreen] = useToggler(false)
    // State for computer screen tuning progress (up to a count of 3)
    const [tuningCount, setTuningCount] = useState(0)

    return (
        <section className="section widgets-section">
            <h2 className="title widgets-title">Widgets</h2>

            {/* Netflix-style play next button */}
            <div className="widget">
                <h3 className="widget-title">Netflix style play next button</h3>
                <div 
                className="play-next-container"
                onClick={togglePlayNext}>
                    {/* The light background layer */}
                    <div className="play-next-light">
                        <p className="play-next-text"><HiMiniPlay />Play next</p>
                    </div>
                    {/* Darker animated layer - grows when activated */}
                    <div className={`play-next-dark ${playNext ? 'play-next-animated' : ''}`}>
                        <p className="play-next-text"><HiMiniPlay className="play-next-logo" />Play next</p>
                    </div>
                </div>
            </div>

            {/* Dog gallery widget */}
            <div className="widget">
                <h3 className="widget-title">Dog gallery</h3>
                <div className="image-gallery-container">
                    {/* Images expand when hovered */}
                    <img 
                        className="image-gallery-img" 
                        src={dog1} 
                        alt="Dog 1"
                    />
                    <img 
                        className="image-gallery-img" 
                        src={dog2} 
                        alt="Dog 2"
                    />
                    <img 
                        className="image-gallery-img" 
                        src={dog3} 
                        alt="Dog 3"
                    />
                </div>
            </div>

            {/* Neon widget */}
            <div className="dark-widget">
                <h3 className="dark-widget-title">Neon widget</h3>
                {/* Neon text with glow and flickering effect */}
                <div 
                className={`neon-container ${neon ? '' : 'neoff'}`}
                onClick={toggleNeon}>
                    {neon ? 'Neon' : 'Neoff'}
                </div>
            </div>

            {/* Social media widget */}
            <div className="widget">
                <h3 className="widget-title">Social widget</h3>
                <div className="social-widget">
                    {/* TikTok logo */}
                    <div className="social-icon-container">
                        <img 
                            className="social-widget-logo" 
                            src={tikTok}
                            alt="TikTok logo"
                        />
                    </div>
                    <p className="social-widget-text">@example</p>
                </div>
            </div>

            {/* Battery widget */}
            <div className="widget">
                <h3 className="widget-title">Battery widget</h3>
                {/* Battery nubbin */}
                <div className="nubbin"></div>
                {/* Battery container */}
                <div className="battery">
                    <div className="battery-top"></div>
                    <div className="battery-bottom">
                        {/* Battery label */}
                        <p className="battery-text">MIKEYCELL</p>
                        {/* Charge percentage indicators */}
                        <p className="zero-percent-charge">0%</p>
                        <p className="hundred-percent-charge">100%</p>
                    </div>
                    {/* Battery charge level - colour coded */}
                    <div className="charge"></div>
                </div>
            </div>

            {/* Hacking computer widget */}
            <div className="dark-widget">
                <div className="computer-container">
                    <h3 className="computer-screen-title">Hacking widget</h3>
                    {/* Start button - toggles computer screen on/off */}
                    <button 
                        className="computer-screen-button" 
                        onClick={toggleComputerScreen}
                    >
                        <p className="computer-screen-button-text">Start</p>
                    </button>
                    <div className={`computer-screen-container ${computerScreen ? 'computer-screen-container-toggled' : ''}`}>
                        {/* Main screen display */}
                        <div className="computer-screen">
                            {/* Static noise overlay - fades as tuning progresses */}
                            {computerScreen && 
                            <div 
                                className="computer-screen-static"
                                style={{opacity: `${1 - (tuningCount * 0.33)}`}}
                                alt="Screen static"
                            ></div>}
                            {/* Vault Boy image that appears when tuning */}
                            {computerScreen && 
                            <img 
                                src={vaultboy} 
                                className="computer-screen-image"
                                alt="Vault Boy"
                            />}
                        </div>
                        {/* Screen controls section */}
                        <div className="computer-screen-controls">
                            {/* Text readout - shows contextual messages based on tuning progress */}
                            <div className="computer-subscreen">
                                {computerScreen && 
                                <p 
                                    className="computer-subscreen-text"
                                    key={tuningCount}
                                >
                                    {tuningCount === 0 ? 'No signal.' : tuningCount === 3 ? 'Success!' : 'Tuning...'}
                                </p>}
                            </div>
                            {/* Rotatable tuning knob - click to progress through tuning stages */}
                            <div 
                                className="computer-knob"
                                style={{transform: `rotate(${tuningCount * 120}deg)`}}
                                onClick={() => setTuningCount(prev => prev < 3 ? prev + 1 : 3)}
                                role="button"
                                aria-label="Tuning knob"
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}