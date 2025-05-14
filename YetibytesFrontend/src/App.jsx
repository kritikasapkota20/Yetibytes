import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/index'
import About from "./Pages/About/index"
import MainLayout from './Layout/MainLayout'
import Service from "./Pages/Service/index"
import Contact from "./Pages/Contact/index"
import Career from "./Pages/Career/index"
import Blog from './Pages/Blog/Blog'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>}/>
            <Route path="/services" element={<Service/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/career" element={<Career/>}/>
            <Route path="/blog" element={<Blog/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App