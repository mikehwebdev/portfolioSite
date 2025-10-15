import { HiMiniPlay } from "react-icons/hi2";
import { useState } from "react";
import dog1 from "../imgs/dog1.jpg";
import dog2 from '../imgs/dog2.jpg';
import dog3 from '../imgs/dog3.jpg';
import tikTok from '../imgs/Tiktok_Logo.png'

// import { FaTiktok } from "react-icons/fa6";

export default function Widgets () {

    const [toggled, setToggled] = useState(false)

    function toggler(){
        setToggled(prev => !prev)
    }

    return (
        <section className="section widgets-section">
            <h2 className="title widgets-title">Widgets</h2>
            <div className="widget">
                <h3 className="widget-title">Netflix style play next button</h3>    
                    <div className="play-next-container"> 
                        <div className={`play-next-light ${toggled? 'play-next-animated' : ''}`}>
                            <p className="play-next-text"><HiMiniPlay />Play next</p>
                        </div>
                        <div className="play-next-dark">
                            <p className="play-next-text"><HiMiniPlay className="play-next-logo"/>Play next</p>
                        </div>
                    </div>
                    <button className={`activate-btn ${toggled ? 'adjust-width' : ''}`} onClick={toggler} >{!toggled ? "Activate this widget" : "De-activate"}</button>
            </div>

            <div className="widget">
                <h3 className="widget-title">Expanding image gallery</h3>
                <div className="image-gallery-container">
                    <img className="image-gallery-img" src={dog1} />
                    <img className="image-gallery-img" src={dog2} />
                    <img className="image-gallery-img" src={dog3} />
                </div>
            </div>

            <div className="widget dark-widget">
                <h3 className="dark-widget-title">Neon widget</h3>
                <div className={`neon-container ${toggled? '' : 'neoff'}`}>
                    {toggled? 'Neon' : 'Neoff'}
                </div>
                <button className={`activate-btn ${toggled ? 'adjust-width' : ''}`} onClick={toggler} >{!toggled ? "Activate this widget" : "De-activate"}</button>

            </div>


            <div className="widget">
            <h3 className="widget-title">Social widget</h3>
                <div className="social-widget">
                    <div className="social-icon-container">
                        <img className="social-widget-logo" src={tikTok}/>
                    </div>         
                    <p className="social-widget-text">@example</p>
                </div>
            </div>

            <div className="widget">
            <h3 className="widget-title">Battery widget</h3>
                <div className="nubbin"></div>
                <div className="battery">
                    <div className="battery-top"></div>
                    <div className="battery-bottom">
                        <p className="battery-text">MIKEYCELL</p>
                        <p className="zero-percent-charge">0%</p>
                        <p className="hundred-percent-charge">100%</p>
                    </div>
                    <div className="charge"></div>
                </div>
            </div>
        </section>
    )
}