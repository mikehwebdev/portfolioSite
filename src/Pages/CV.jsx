import { useState } from "react"
import { useScrollToTop } from '../Hooks/useScrollToTop'
import { cvData as importedData } from "../Data/cvData"

import { FaPerson } from "react-icons/fa6"
import { FaClipboardList } from "react-icons/fa6"
import { FaAlignJustify } from "react-icons/fa6"
import { FaFilePen } from "react-icons/fa6"
import { FaGamepad } from "react-icons/fa6"
import { FaAnglesDown } from "react-icons/fa6"
import { FaHtml5 } from "react-icons/fa6"
import { FaCss3Alt } from "react-icons/fa6"
import { FaJs } from "react-icons/fa6"
import { FaReact } from "react-icons/fa6"
import { FaGitAlt } from "react-icons/fa6"
import { FaGithub } from "react-icons/fa6"

// * Interactive CV page - displays interactive rotating CV dial and contextual sections *
export default function CV() {

    // Scroll to top of page when component mounts
    useScrollToTop()

    // State for dial rotation angle (0, 45, 90, 135, 180 degrees)
    const [num, setNum] = useState(0)

    // Update dial rotation when icon is clicked
    function rotateDial(value) {
        setNum(value)
    }

    // Apply rotation transform to dial element
    const style = {
        transform: `rotate(${num}deg)`
    }

    // State for contextual CV data  
    const [cvdata, setCvdata] = useState(importedData)

    // Toggle expanded/collapsed state of employment history items
    function toggler(id) {
        setCvdata(prev => {
            // Only update Employment history section
            return prev.map(item => item.title !== "Employment history" ? item :
                // Toggle the toggled property of the matching job by id
                { ...item, subItems: item.subItems.map(job => job.id === id ? { ...job, toggled: !job.toggled } : job) })

        })
    }

    // Map CV data into displayable elements
    const cvElement = cvdata.map(element => {

        return <div 
            key={element.id}
            // Add transition class when this section is selected
            className={`cv-element${element.id === num ? " transition-visibility" : ""}`}>

            {/* Section content - only renders if there is data to render*/}
            <h2 className="cv-element-title">{element.title}</h2>
            {element.subHeader
                &&
                <h3 className="cv-element-subHeader" >{element.subHeader}</h3>}
            {element.subHeaderDetail
                &&
                <h3 className="cv-element-subHeaderDetail" >{element.subHeaderDetail}</h3>}
            {element.text
                &&
                <div className="cv-element-text-container">
                    {element.text && element.text.map((text, index) => <p className="cv-element-text" key={index}>{text}</p>)}
                </div>}
            {element.list
                &&
                <ul className="cv-element-list">
                    {element.list.map((list, index) => <li className="cv-element-list-item" key={index}>{list}</li>)}
                </ul>}
            {/* Expendable sub-items if data is present */}
            {element.subItems

                &&
                <div className="cv-element-subItem-container">

                    {element.subItems.map((item, index) => {
                        return (
                            <div 
                                // Add class to expand height when toggled 
                                className={`cv-element-subItem ${item.toggled ? 'cv-max-height' : ''}`}
                                key={index}
                                // Toggle expanded state on click
                                onClick={(() => toggler(item.id))}>
                                
                                {/* Arrow icon that rotates when section expanded */}
                                <FaAnglesDown className={`cv-arrow${item.toggled ? " rotate-cv-arrow" : ''}`} />
                                {/* Job section with all relevant content */}
                                <h3 className="cv-element-subItem-subHeader" >{item.subHeader}</h3>
                                <h3 className="cv-element-subItem-subHeaderDetail" >{item.subHeaderDetail}</h3>
                                <div className="cv-element-subItem-data">
                                    <p className="cv-element-subItem-date">{item.date}</p>
                                    <div className="cv-element-subItem-text-container">
                                        <p className="key-responsibilities">{item.text}</p>
                                    </div>
                                    <ul className="cv-element-subItem-list">
                                        {item.list.map((list, index) => <li className="cv-element-list-item" key={index}>{list}</li>)}
                                    </ul>
                                </div>
                            </div>
                        )
                    }

                    )
                    }</div>
            }
            {/* Seperate rendering for Web dev skills section with skill cards */}
            {element.title === "Web development skills" &&

                <div className="home-tech-icons-container">
                    <div className='tech-icon-card'>
                        <p className='tech-icon-title'>HTML 5</p>
                        <FaHtml5 className='tech-icon-img' />
                    </div>
                    <div className='tech-icon-card'>
                        <p className='tech-icon-title'>CSS</p>
                        <FaCss3Alt className='tech-icon-img' />
                    </div>
                    <div className='tech-icon-card'>
                        <p className='tech-icon-title'>Javascript</p>
                        <FaJs className='tech-icon-img' />
                    </div>
                    <div className='tech-icon-card'>
                        <p className='tech-icon-title'>React</p>
                        <FaReact className='tech-icon-img' />
                    </div>
                    <div className='tech-icon-card'>
                        <p className='tech-icon-title'>Git</p>
                        <FaGitAlt className='tech-icon-img' />
                    </div>
                    <div className='tech-icon-card'>
                        <p className='tech-icon-title'>GitHub</p>
                        <FaGithub className='tech-icon-img' />
                    </div>
                </div>
            }

        </div>

    })

    // Array of CV sections with their icons and rotation angles
    const cvSections = [
        { Icon: FaPerson, className: 'personal', rotation: 0, label: 'Personal' },
        { Icon: FaClipboardList, className: 'history', rotation: 45, label: 'Employment History' },
        { Icon: FaAlignJustify, className: 'statement', rotation: 90, label: 'Personal Statement' },
        { Icon: FaFilePen, className: 'education', rotation: 135, label: 'Education' },
        { Icon: FaGamepad, className: 'hobbies', rotation: 180, label: 'Hobbies' }
    ]

    return (
        <section className="section CV-section">
            <h2 className="title cv-title">Mike's interactive CV</h2>

            {/* Interactive CV dial selector - click icons rotates to show different CV sections */}
            <div className="interactive-CV-container">
                {/* Rotating dial that visually indicates selected section */}
                <div className="cv-dial" style={style}>
                    <div className="knob"></div>
                </div>
                
                {/* Map through sections to render clickable icons */}
                {cvSections.map(({ Icon, className, rotation, label }) => (
                    <Icon 
                        key={label}
                        onClick={() => rotateDial(rotation)} 
                        className={`cv-icon ${className}`}
                        aria-label={`${label} section`}
                    />
                ))}
            </div>
            {/* Display selected CV section based on dial rotation */}
            <div className="cv-element-container">
                {cvElement}
            </div>

        </section>
    )
}