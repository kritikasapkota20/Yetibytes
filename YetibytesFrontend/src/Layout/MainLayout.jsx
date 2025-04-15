import { Outlet } from 'react-router-dom'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow  bg-[#edf7ff]">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
