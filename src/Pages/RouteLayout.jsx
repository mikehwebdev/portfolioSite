
import Header from "../Components/Header"
// Import Outlet from React Router - renders matched child route components
import { Outlet } from "react-router-dom"
import Footer from "../Components/Footer"

// *** RouteLayout component *** - main layout wrapper for all pages
// Displays Header, page content (via Outlet), and Footer

export default function RouteLayout() {
    return (
        <>
            {/* Header component - this is displayed on every page */}
            <Header />
            {/* Content container */}
            <main className="container">
            {/* Outlet renders out the selected child route i.e <Projects /> */}
                <Outlet />
            </main>
            {/* Footer component - this is displayed on every page */}
            <Footer />
        </>
    )
}