import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/Programs";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Quote from "./Components/Quote/Quote";
import Location from "./Components/Location/Location";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";
import Faculty from "./Components/Faculty/Faculty";
import Register from "./Components/Register/Register";
import LatestEvent from "./Components/LatestEvent/LatestEvent";
import Hero_details from "./Components/Hero_details/Hero_details";

const Home = ({ setPlayState, playState }) => (
  <>
    <Hero />
    <div className="outer-container">
      <div className="container">
        <Title title="Message from the Principal" />
        <Quote />

        <Title subTitle="Our PROGRAM" title="What We Offer" />
        <Programs />
      </div>

      <div className="about-container">
        <About setPlayState={setPlayState} />
      </div>

      <Title subTitle="GALLERY" title="Campus Photos" />
      <Campus />

      <Title subTitle="LATEST NEWS" title="Here are what we do" />
      <LatestEvent />

      <div className="container">
        <Title subTitle="FACULTY" title="We are here for you" />
        <Faculty />

        <Title subTitle="TESTIMONIALS" title="What students say" />
        <Testimonials />

        <Title subTitle="Location" title="We are here & Bus Route" />
        <Location />
      </div>

      <Register />

      <div className="container">
        <Title subTitle="Contact Us" title="Get in touch" />
        <Contact />
        <Footer />
      </div>

      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  </>
);

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home playState={playState} setPlayState={setPlayState} />}
        />

        <Route path="/hero-details" element={<Hero_details />} />
      </Routes>
    </>
  );
};

export default App;
