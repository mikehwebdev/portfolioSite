import { useState, useRef, useEffect } from "react"


export default function Project(){


    const ref = useRef()
    const [isIntersecting, setIsIntersecting] = useState(false)

    useEffect(()=>{
        const observer = new IntersectionObserver(
            ([entry]) =>{
                setIsIntersecting(entry.isIntersecting  )
            },
            {rootMargin:"-50px -50px"}
        )
        
        observer.observe(ref.current)
        return ()=> observer.disconnect()
    },[isIntersecting])

    useEffect(()=>{
        if (isIntersecting) {
            ref.current.classList.add('slide-test')
        }
    }, [isIntersecting])

    return (
        <div className="project" ref={ref}>
                        test
        </div>
    )
}