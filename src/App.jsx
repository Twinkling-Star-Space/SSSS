import React , {useState} from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Quote from './Components/Quote/Quote'
import Location from './Components/Location/Location'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
         <Title title="Quote from our Principal"/>
        <Quote/>

        <Title subTitle="Our PROGRAM" title="What We Offer"/>
        <Programs/>
          <About setPlayState={setPlayState}/>
          <Title subTitle="GALLERY" title="Campus Photos"/>
          <Campus/>

          <Title subTitle="TESTIMONIALS" title="What students say"/>
          <Testimonials/>

          <Title subTitle="Location" title="We are here"/>
          <Location/>

          <Title subTitle="Contact Us" title="Get in touch"/>
          <Contact/>

          <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App
