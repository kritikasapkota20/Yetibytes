import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import ABout from "./Pages/About/index"


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<ABout/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App