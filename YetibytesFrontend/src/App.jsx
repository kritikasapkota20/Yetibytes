import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/index'
import About from "./Pages/About/index"
import MainLayout from './Layout/MainLayout'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App