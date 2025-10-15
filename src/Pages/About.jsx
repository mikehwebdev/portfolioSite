import vmgTrek from '../imgs/VMG trek.jpg'
import eachImage from '../imgs/each mobile.jpg'
import oohMatron from '../imgs/covid hair.jpg'

export default function About(){
    return(
        <section className="section about-section">
        
            <h2 className="title about-title">A little about me</h2>
                <p className="main-text about-text">Well<em> hello there!</em> I'm Mike Hatton. A front-end devloper with a deep love of web-technolgies and the impact they can have on the digital and non-digital world world alike. Before my move into tech I was an account manager for one of the leading digital fundraising platforms in the UK - Vrgin Money Giving.
                <br/>
                <br/>
                I loved this role. It combined my passion for helping others acheive their best professionally with the resources at hand (usually scant for charities) with my love of helping those in less fortunate situations than my own. </p>

                <img src={vmgTrek} className='about-content-img' alt='Mike doing a charity walk'/>

                <img src={oohMatron} className='about-content-img' alt='Mike looking worried'/>

                <p className="main-text about-text"> I was hugely successful in my role. I helped to raise millions of pounds for charities, I identified and championed digital corporate fundraising and achieved huge success in that burgeoning field. I also made a lot of friends and in my own way helped change the industry for the better.
                <br/>
                <br/>                    
                Things change though and after a brief foray into fundraising at a local Children&apos;s Hospice, the birth of my son meant I had to make the choice to switch to night work to support my family financially while looking after my son during the day. Then covid hit. With all its terrible dad hair implications (see below - if you dare).</p>

                <p className="main-text about-text">It&apos;s pretty fair to say everyone&apos;s plans were ruined for a while. I ruminated for a while on what direction I&apos;d like to consider for a career and I knew night&apos;s and looking after my baby son during the day were going to be my life for a while and if I wanted to re-train the time was now.
                <br />
                <br />
                While considering this I did remember when working in digital fundraising I sat in to consultation on a re-design of our website to give it a refresh and give it a more modern look and feel. Working in a sales capacity at the time, I had been amazed that sharpening up a digital journey could impact donations that a charity could receive, usually having far more of an impact than even the best sales work could achieve.</p>

                <img src={eachImage} className='about-content-img' alt='Mike riding a toy car'/>

                <p className="main-text about-text">I&apos;d created a few web pages back in the day, when the internet was black and white and dinosaurs roamed the earth, so thought I&apos;d try a few tutorials on YouTube and see if I found it of of any interest. What&apos;s the worst that could happen?
                <br/>
                <br/>
                I was immediately hooked. HTML? Brilliant! CSS? Beautiful! Javascript? Pure magic! It was all fascinating, endlessly interesting, and totally had me hooked.
                <br/>
                <br/>
                So, with every spare minute I&apos;ve had, I&apos;ve studied. Lot&apos;s of great projects, terrible projects, re-writing code, teeth gnashing frustration at web development&apos;s foibles and the utter delight when solving a long standing problem.
                <br/>
                <br/>
                So here I am. A new web developer ready to go. I&apos;m confident in the steps I&apos;ve taken, I&apos;ve learned just enough to understand I'll never know it all. I&apos;m dedicated, a tireless learner and would be an asset to any team I&apos;m part of. </p>
        </section>
    )
}