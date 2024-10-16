import profileImg from '../imgs/profile image.jpg'



export default function Home(){
    return (
        <section className="section home">
            <h2 className="title"> Hi I'm Mike Hatton's test- Web developer - Father - Horror film aficianado</h2>
            <img src={profileImg} className='content-img'/>
            <p className='main-text'>Welcome to my site! Please feel free to have a click around to see what I'm about, explore the little micro-apps I have dotted around my site, and if you'd like to get in touch feel free to have click on my social links below.</p>
        </section>
    )
}