
import Header from "../Components/Header"
import { Outlet } from "react-router-dom"
import Footer from "../Components/Footer"

export default function RouteLayout(){
    return (
        <div className="wrapper">
        <Header/>
        <main className="container">
            <Outlet/>
        </main>
        <Footer />
        </div>
    )
}