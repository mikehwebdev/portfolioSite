import profileImg from '../imgs/profile image.jpg'
import { useScrollToTop } from '../Hooks/useScrollToTop'

// * Home *
export default function Home() {

    // Scroll to top of page when component mounts
useScrollToTop()

    return (
        <section className="section home-section">
            <h2 className=" title home-title"> Hi I'm Mike Hatton - Web developer, Dad and horror film enthusiast</h2>
            <img src={profileImg} className='home-content-img' />
            <p className='home-text main-text'>Welcome to my site! Please feel free to have a click around to see what I'm about, explore the little micro-apps I have dotted around my site, and if you'd like to get in touch feel free to have click on my social links below.
            </p>
        </section>
    )
}