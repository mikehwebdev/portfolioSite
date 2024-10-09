
import react from "react"
import { useParams } from "react-router-dom"
import FlickResult from "../Components/FlickResult"
import Flick from "../Components/Flick"
import { horrorFlicksData } from "../Data/horrorFlickData"

export default function HorrorFlicks(){
    
    function inputDataUpdate(e){
        setSearchString(e.target.value)
    }

    const [searchString, setSearchString] = react.useState('')

    const filterResults = horrorFlicksData.filter(flick => flick.title.toLowerCase().includes(searchString.toLowerCase()))
   
    const flickResultElements = filterResults.map(flickResult =>
    {
        return (
        <FlickResult
            key={flickResult.id}
            id={flickResult.id}
            title={flickResult.title}
            cardimage={flickResult.cardImage}
            rating={flickResult.rating}
            subHeader={flickResult.subHeader}
            review={flickResult.review}
            imdbLink={flickResult.imdbLink}
        />
        )
        }
    
    )

    const {id} = useParams()
    
    return (
        <>   
            <section className="section horror">
            <h2 className="title">Horror flick micro reviews</h2>
               {id ? <Flick/> :
               <div className="flick-search">
                <input 
                type="text" 
                placeholder="search reviews..."
                onChange={inputDataUpdate}
                value={searchString}
                className="search-input"
                />

                {searchString && filterResults.length === 0 ? <p>No results</p> : 
                <div className="flick-result-container slide-up">
                    {flickResultElements}
                    </div> 
                }   
               
               </div> 
               }
            </section>
            
        </>
    )
}