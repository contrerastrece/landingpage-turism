import './App.css'
import AboutUs from './components/AbotUs'
import AllTours from './components/AllTours'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Testimonials from './components/Testimonials'
import TourPackage from './components/TourPackage'

function App() {

  return (
    <div className='flex flex-col gap-[2rem]'>
      <Navbar/>
      <Hero/>
      <AboutUs/>
      <TourPackage/>
      <Testimonials/>
      <AllTours/>
      <Footer/> 
    </div >
  )
}

export default App
