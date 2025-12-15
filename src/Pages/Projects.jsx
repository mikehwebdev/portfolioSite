
import { useScrollToTop } from '../Hooks/useScrollToTop'
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
            {/* Mapped project components */}
            {projectElements}
        </section>
    )
}