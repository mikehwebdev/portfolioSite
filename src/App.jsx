import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'

//Pages
import RootLayout from './Pages/RouteLayout'
import Home from './Pages/Home'
import About from './Pages/About'
import Projects from './Pages/Projects'
import CV from './Pages/CV'
import Error from './Pages/ErrorPage'
import Widgets from './Pages/Widgets'


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<RootLayout />}>
    <Route index element={<Home />} />
    <Route path="*" element={<Error />} />
    <Route path="about" element={<About />} />
    <Route path="projects" element={<Projects />} />
    <Route path="cv" element={<CV />} />
    <Route path="widgets" element={<Widgets />} />
  </Route>
))

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}