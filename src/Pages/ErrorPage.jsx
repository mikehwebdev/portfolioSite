import {Link} from "react-router-dom"
import errorImage from '../imgs/giphy.webp'

export default function Error(){
    return (
        <>
        <h2 className="title error-message">Page not found</h2>
        <img src={errorImage} alt="John Travolta looking confused in Pulp Fiction" className="error-image"/>
        <p>Return to <Link to='/' className="nav-link">Home</Link> and try again!</p>
        </>
    )
}