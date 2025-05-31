import './App.css'
import { useState } from 'react'
import { Navbar } from './components/navbar'
import Main from "./pages/main/Page"
import { MobileSlider } from './components/mobile-slider'

function App() {

  const [ sliderOpen, setSliderOpen ] = useState(false)

  return (
    <div className='app'> 
      <Navbar setSliderOpen={setSliderOpen} />

      <Main />
      
      {
        sliderOpen
        ?
        <MobileSlider setSliderOpen={setSliderOpen} />
        :
        <></>
      }
    </div>
  )
}

export default App
