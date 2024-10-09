import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'

//Pages
import RootLayout from './Pages/RouteLayout'
import Home from './Pages/Home'
import About from './Pages/About'
import Skills from './Pages/Skills'
import Projects from './Pages/Projects'
import CV from './Pages/CV'
import HorrorFlicks from './Pages/HorrorFlicks'
import Error from './Pages/ErrorPage'

import Flick from './Components/Flick'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<RootLayout />}>
    <Route index element={<Home/> } />
    <Route path="*" element={<Error />} />
    <Route path="About" element={<About />}/>
    <Route path="Skills" element={<Skills />}/>
    <Route path="Projects" element={<Projects />}/>
    <Route path="HorrorFlicks" element={<HorrorFlicks />}>
      <Route path=":id" element={<Flick/>} />
    </Route>
    <Route path="CV" element={<CV />}/>
    

  </Route>
))

export default function App(){
  return (
    <RouterProvider router={router}/>
  )
}