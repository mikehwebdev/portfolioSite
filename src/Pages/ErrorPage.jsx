import { Link } from "react-router-dom"
import { useScrollToTop } from '../Hooks/useScrollToTop'
import errorImage from '../imgs/giphy.webp'

// * Error page *
export default function Error() {

    // Scroll to top of page when component mounts
    useScrollToTop()
    return (
        <>
            <h2 className="title error-message">Page not found</h2>
            <img src={errorImage} alt="John Travolta looking confused in Pulp Fiction" className="error-image" />
            <p>Return to <Link to='/' className="nav-link">Home</Link> and try again!</p>
        </>
    )
}