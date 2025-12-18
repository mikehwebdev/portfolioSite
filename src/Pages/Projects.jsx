
import { useScrollToTop } from '../Hooks/useScrollToTop'
import { Link } from 'react-router-dom'
import { projectData } from '../Data/projectData'

import Project from '../Components/Project'

// * Projects page *
export default function Projects() {

    // Scroll to top of page when component mounts
    useScrollToTop()

    // Map project data into Project components
    const projectElements = projectData.map(project => {
        return (
            <Project
                id={project.id}
                key={project.id}
                title={project.title}
                description={project.description}
                images={project.images}
                liveLink={project.liveLink}
                githubLink={project.githubLink}
            />)

    })

    return (

        <section className="section projects-container">
            <h2 className="title">Projects</h2>
            <p className="projects-description-text">Here I've incldued a selection of my best projects.</p>
            <p className="projects-description-text">These projects are more technically complicated apps or full sites that I've developed as side projects
                to really show off my web development skills.
            </p>
            <p className="projects-description-text">For smaller projects you can check out my 
                <Link to="./widgets" className="projects-description-link"> Widgets</Link> section. For more exercise based projects you can head over to my
                <a href="https://www.frontendmentor.io/profile/mikehwebdev" target="_blank" className="projects-description-link"> Frontend Mentor</a> profile. These projects
                are based on figma design documents provided to reflect more real world scenarios.</p>
            {/* Mapped project components */}
            {projectElements}
        </section>
    )
}