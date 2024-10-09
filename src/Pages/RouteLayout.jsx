
import Header from "../Components/Header"
import { Outlet } from "react-router-dom"
import Footer from "../Components/Footer"

export default function RouteLayout(){
    return (
        <>
        <Header/>
        <main className="container">
            <Outlet/>
        </main>
        <Footer />
        </>
    )
}