import { useState } from "react";

import {cvData as importedData} from "../Data/cvData"

import { FaPerson } from "react-icons/fa6";
import { FaClipboardList } from "react-icons/fa6";
import { FaAlignJustify } from "react-icons/fa6";
import { FaFilePen } from "react-icons/fa6";
import { FaGamepad } from "react-icons/fa6";
import { FaAnglesDown } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { FaJs } from "react-icons/fa6";
import { FaReact } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";


export default function CV(){

    const [num, setNum] = useState(0)

    function rotateDial(value){
        setNum(value)
    }

   const style = {
        transform: `rotate(${num}deg)`
   }

   const [cvdata, setCvdata] = useState(importedData)

   function toggler(id) {
    setCvdata(prev => {
        return prev.map(item => item.title !== "Employment history" ? item : 
            {...item, subItems: item.subItems.map(job => job.id === id ? {...job, toggled:!job.toggled} : job )} )
        
    } )
   }

   const cvElement = cvdata.map(element => {
    
        return <div key={element.id}  className={`cv-element${element.id === num ? " transition-visibility" : ""}`}>
                
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
                        {element.list.map((list, index) => <li className="cv-element-list-item" key={index}>{list}</li>) }
                    </ul>}

                    {element.subItems 

                    &&
                    <div className="cv-element-subItem-container">
                
                    {element.subItems.map((item, index)=>
                    {return (
                        <div className="cv-element-subItem"
                         key={index}
                         onClick={(()=>toggler(item.id))}> 
                         <FaAnglesDown className={`cv-arrow${item.toggled ? " rotate-cv-arrow" : ''}`}/>
                            <h3 className="cv-element-subItem-subHeader" >{item.subHeader}</h3>
                            <h3 className="cv-element-subItem-subHeaderDetail" >{item.subHeaderDetail}</h3>
                            <div className={`cv-element-subItem-data ${item.toggled ? " max-height" : ''}`}>
                            <p className="cv-element-subItem-date">{item.date}</p>
                            <div className="cv-element-subItem-text-container">
                                <p className="key-responsibilities">{item.text}</p>
                            </div>
                            <ul className="cv-element-subItem-list">
                            {item.list.map((list, index) => <li className="cv-element-list-item" key={index}>{list}</li>) }
                            </ul>
                            </div>
                           
                        </div>
                    )
                    }
                    
   )
}</div>
   }

 {element.title === "Hard skills" &&
                            
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
            <FaJs className='tech-icon-img'/>
        </div>
        <div className='tech-icon-card'>
            <p className='tech-icon-title'>React</p>
            <FaReact className='tech-icon-img'/>
        </div>
        <div className='tech-icon-card'>
            <p className='tech-icon-title'>Git</p>
            <FaGitAlt className='tech-icon-img'/>
        </div>
        <div className='tech-icon-card'>
            <p className='tech-icon-title'>GitHub</p>
            <FaGithub className='tech-icon-img'/>
        </div>
               
            </div>

                            }

        </div>
    
   })

    return(
        <section className="section CV-section">
            <h2 className="title cv-title">Interactive CV</h2>

            <div className="interactive-CV-container">
                <div className="cv-dial" style={style}>
                    <div className="knob"></div>
                </div>
                    <FaPerson onClick={() => rotateDial(0)} className="cv-icon personal"/>
                    <FaClipboardList onClick={() => rotateDial(45)} className="cv-icon history"/>
                    <FaAlignJustify onClick={() => rotateDial(90)} className="cv-icon statement"/>
                    <FaFilePen onClick={() => rotateDial(135)} className="cv-icon education"/>
                    <FaGamepad onClick={() => rotateDial(180)} className="cv-icon hobbies"/>
            </div>
            <div className="cv-element-container">
                {cvElement}
            </div>
            
        </section>
    )
}