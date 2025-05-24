import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from "@vercel/analytics/react"
import Home from './Pages/Home/index'
import About from "./Pages/About/index"
import MainLayout from './Layout/MainLayout'
import Service from "./Pages/Service/index"
import Contact from "./Pages/Contact/index"
import Career from "./Pages/Career/index"
import Blog from './Pages/Blog/Blog'
import ScrollToTop from "./Components/ScrollToTop";

 


const App = () => {
  return (
    <div>
       {/* ... */}
       <SpeedInsights />
      <BrowserRouter>
      <ScrollToTop />
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
      <Analytics />
    </div>
  )
}

export default App