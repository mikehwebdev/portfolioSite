
export default function Skill({clicked, skillType, skillContent, handleClick, id}){

    const skillsCardElements = skillContent.map(skill => {
        return (
        <div className={`skill ${clicked? 'reverse-fade-in' :''}`}
         key={skill.id}>
                <h2>{skill.header}</h2>
                <p>{skill.text}</p>
                <p>{skill.subheader}</p>
            </div>
        )
    }
        
    )


    return (
        <div className={`skill-card ${clicked}`} onClick={()=>handleClick(id)}>
            <p className="skill-card-title text-fade-in">{skillType} <br />skills</p>
            <div className={`skill-card-content ${clicked ? 'max-height' : ''}`}>
                {skillsCardElements}
            </div>
        </div>
    )
}