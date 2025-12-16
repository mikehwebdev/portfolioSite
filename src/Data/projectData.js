import horror1 from "../imgs/Projects/HorrorFlick/Horror1.png"
import horror2 from "../imgs/Projects/HorrorFlick/Horror2.png"
import horror3 from "../imgs/Projects/HorrorFlick/Horror3.png"
import horror4 from "../imgs/Projects/HorrorFlick/Horror4.png"
import horror5 from "../imgs/Projects/HorrorFlick/Horror5.png"
import horror6 from "../imgs/Projects/HorrorFlick/Horror6.png"


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
    // ,
    // {
    //     id: 2,
    //     title: "project 2",
    //     description: ["test 2"],
    //     image: "image",
    //     liveLink: "liveLink",
    //     githubLink: "githubLink"
    // },
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