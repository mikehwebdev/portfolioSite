import horror1 from "../imgs/Projects/HorrorFlick/Horror1.png"
import horror2 from "../imgs/Projects/HorrorFlick/Horror2.png"
import horror3 from "../imgs/Projects/HorrorFlick/Horror3.png"
import horror4 from "../imgs/Projects/HorrorFlick/Horror4.png"
import horror5 from "../imgs/Projects/HorrorFlick/Horror5.png"
import horror6 from "../imgs/Projects/HorrorFlick/Horror6.png"

import webDev1 from "../imgs/Projects/webDevQuiz/webDev1.png"
import webDev2 from "../imgs/Projects/webDevQuiz/webDev2.png"
import webDev3 from "../imgs/Projects/webDevQuiz/webDev3.png"
import webDev4 from "../imgs/Projects/webDevQuiz/webDev4.png"
import webDev5 from "../imgs/Projects/webDevQuiz/webDev5.png"
import webDev6 from "../imgs/Projects/webDevQuiz/webDev6.png"


const projectData = [
    {
        id: 1,
        title: "Mikey's micro horror reviews app",
        description: [
                        "One of my favourite projects - Mikey's micro horror reviews app is a combination of my passion for horror films and making a resource that other people could enjoy as well. ", 
                        "Anyone visiting can peruse the reviews or even write their own if they wish with localStorage allowing the reviews they create to persist between visits. ", 
                        "From the start I wanted the app to combine data fetched from the internet and user generated content to create a personalised app for themselves.", 
                        "If the user then decides to remove a review that's no problem at all with a slick and easy to understand interface they can."],
        images: [horror1, horror2, horror3, horror4, horror5, horror6],
        liveLink: "https://horrorflickreviews.netlify.app/",
        githubLink: "https://github.com/mikehwebdev/horrorFlickReviews"
    }
    ,
    {
        id: 2,
        title: "Web development quiz",
        description: [
                        "I love this little project. It re-confirms to me the power and usefulness of software development",
                        "As I started to transition from just learning web development to actively seeking a web development role I was looking for a tool to help drill me on web development concepts.",
                        "Unfortunately I couldn't find something that ticked all my boxes. I wanted a simple multiple choice app that I could use to sharpen my knowledge whenever I had a spare momment such as on lunch breaks or while waiting for a bus.",
                        "I couldn't find one that suited so I just built one for myself! I created an example question around a javascript method, provided the answer and then provided two plausible sounding but incorrect answers.",
                        "I then asked AI to use that approach as a guideline and generate hundreds of questions on topics that a junior dev would need to know for their first role - and what you see here is the result!"
        ],
        images: [webDev1, webDev2, webDev3, webDev4, webDev5, webDev6],
        liveLink: "https://mikeyswebdevelopmentquiz.netlify.app/",
        githubLink: "https://github.com/mikehwebdev/JSQuiz"
    }
    
    // {
    //     id: 3,
    //     title: "project 3",
    //     description: ["test 3"],
    //     image: "image",
    //     liveLink: "liveLink",
    //     githubLink: "githubLink"
    // },
]


export { projectData }