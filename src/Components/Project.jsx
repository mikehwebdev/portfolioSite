import { useState, useRef, useEffect } from "react"
import Gallery from "./Gallery"
// * Imported icons *
import { TbWorldWww } from "react-icons/tb"
import { TbBrandGithub } from "react-icons/tb"

// * Project card component * 
export default function Project({ id, title, description, images, liveLink, githubLink }) {

    // Ref for DOM element for intersection observer
    const ref = useRef()

    // State to detect if element is in viewport
    const [isIntersecting, setIsIntersecting] = useState(false)

    // Set up Intersection Observer to detect when element enters viewport
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Updates the state
                setIsIntersecting(entry.isIntersecting)
            },
            // Triggers before element fully visble - snazzy!
            { rootMargin: "-80px -80px" }
        )

        // Start observing element
        observer.observe(ref.current)
        // Cleanup observer
        return () => observer.disconnect()
    }, [])

    // Add animation to bring into view
    useEffect(() => {
        if (isIntersecting) {
            ref.current.classList.add('project')
        }
    }, [isIntersecting])

    // "Description" is an array of strings so I map over it to create <p> elements here
    const descriptionElements = description.map((string, index) => <p className="project-description-text" key={index}>{string}</p>)

    return (
        <section className="section projects-section">
            {/* Project card - project-id class is different stating position for each project for extra snazz */}
            <div className={`project-${id}`} ref={ref}>
                <h2 className="project-title">{title}</h2>
                {/* Project content */}
                <div className="project-description-container">
                    {descriptionElements}
                </div>
                <Gallery
                    imgArray={images}
                    title={title}
                    id={id}
                />
                {/* Live link and Github link */}
                <a className="project-live-link" href={liveLink} target="_blank">
                    <div className="project-live-link-container">
                        <TbWorldWww className="project-icon" />
                        <p className="project-live-link-text">Live site</p>
                    </div>
                </a>
                <a className="project-github-link" href={githubLink} target="_blank">
                    <div className="project-github-link-container">
                        <TbBrandGithub className="project-icon" />
                        <p className="project-github-link-text">Github repository</p>
                    </div>
                </a>
            </div>
        </section>
    )
}