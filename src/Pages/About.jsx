import vmgTrek from '../imgs/VMG trek.jpg'
import eachImage from '../imgs/each mobile.jpg'
import oohMatron from '../imgs/covid hair.jpg'

export default function About(){
    return(
        <section className="section about">
        
            <h2 className="title">A little about me...</h2>
                <p className="main-text">Well<em> hello there!</em> I'm Mike Hatton. A front-end devloper with a deep love of web-technolgies and the impact they can have on the non-digital world </p>

                <p className="main-text">Before my move into tech I was an account manager for one of the leading digital fundraising platforms in the UK - Vrgin Money Giving </p>

                <img src={vmgTrek} className='content-img' alt='Mike doing a charity walk'/>

                <p className="main-text">I loved this role. It combined my passion for helping others acheive their best professionally with the resources at hand (usually scant for charities!) with my love of helping those in less fortunate situations than my own</p>

                <p className="main-text">I was hugely succesful in my role. I helped to raise millions of pounds for charities, I identified and championed digital corporate fundraising and achieved huge success in that burgeoning field. I also made a lot of friends and in my own way helped change the industry for the better.</p>

                <img src={eachImage} className='content-img alt' alt='Mike riding a toy car'/>

                <p className="main-text">Things change though and after a brief foray into fundraising at a local Children's Hospice and the birth of my son I had to make the chice to switch to night work to supoport my family financially while looking after my son during the day. Then covid hit. With all it's terrible dad hair implications.</p>

                <img src={oohMatron} className='content-img' alt='Mike looking worried'/>

                <p className="main-text">It's pretty fair to say everyone's plans were ruined for a while. I ruminated for a while on what direction I'd like to for a career and I knew night's and looking after my baby son during the day were going to be my life for a while and if I wanted to re-train the time was now. </p>

                <p className="main-text">While ruminating on this I did remember when working in digital fundraising I sat in to consult on a re-design of our website to give it a refresh and give it a more modern look and feel. Working in a sales capactiy, I had been amazed that sharperning up a digital journey could impact donations that a chariy could receive nd he good work they could do of the back of it - usually having far more of an impact than even the best sales work could acheieve.</p>

                <p className="main-text">I'd created a few web pages back in the day, when the internet was black and white and dinosaurs roamed the earth, so thought I'd try a few tutorials on YouTube and see if I found it of of any interest. What's the worst that could happen?</p>

                <p className="main-text">I was immediately hooked! HTML? Brilliant! CSS? Beautiful! Javascript? Eh what? But, it was all fascinating. Endessly intersting and totally had me hooked.</p>

                <p className="main-text">So, with every spare minute I've had, I've studied. Lot's of great projects, terrible projects, re-writing code, teeth gnashing frustration at web development's foibles and the utter delight when solving a long standing problem.</p>

                <p className="main-text">So here I am. A new web developer ready to go. I'm confident in the steps I've taken, I've learned just enough to realise a) I know nothing and b) I know enough and c) I'll never know enough. I'm dedicated, a tireless learner and would be an asset to any team I'm part of. </p>
        </section>
    )
}