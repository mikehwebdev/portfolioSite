
import {useState} from 'react'

import Skill from '../Components/Skill'
import {skillsData} from '../Data/skillsData'

export default function Skills(){

    function skillToggle(id){
        setSkills(prev => prev.map(skill => {
            return {...skill,
                clicked: skill.id === id ? !skill.clicked : skill.clicked
            }
        }))
    }


    const [skills, setSkills] = useState(skillsData)

    const skillsElements = skills.map(skill => {
        return (
         <Skill
         key={skill.id}
         id={skill.id}
         clicked={skill.clicked}
         skillType={skill.skillType}
         skillContent={skill.skillContent}
         handleClick={skillToggle}
         />
        )
    })


    return(
        <section className="section skills">
            <h2 className="title">Skills</h2>
            <div className="skills-container">
             {skillsElements}
            </div>
        </section>
    )
}