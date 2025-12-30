import React from "react";
import { Target, Lightbulb, Rocket, Building2, GraduationCap, Users, PenTool, MapPin } from "lucide-react";
import "./Hero_details.css";
import Bigpicture from "../../assets/supersense_bigpicture.png";

const Hero_details = () => {
  const historyItems = [
    {
      title: "Overview & Establishment",
      icon: <Building2 className="hist-icon" />,
      text: "Established in 2002 AD (2059 B.S.), Super Sense was founded to provide quality English-medium education to the Dharapani-9 community, nurturing local academic excellence for over two decades."
    },
    {
      title: "Affiliation & Programs",
      icon: <GraduationCap className="hist-icon" />,
      text: "Affiliated with the NEB and recognized by the Ministry of Education, we offer programs from ECD to Grade 10 (SEE) and Plus Two (+2) levels in Management and Education."
    },
    {
      title: "Student Body & Growth",
      icon: <Users className="hist-icon" />,
      text: "We serve a diverse student body from Dharapani and surrounding regions, with hundreds of students successfully pursuing their secondary and higher secondary education."
    },
    {
      title: "Facilities & Activities",
      icon: <PenTool className="hist-icon" />,
      text: "Our infrastructure includes modern science and computer labs, a library, and robust extracurricular opportunities in sports, culture, and counseling."
    },
    {
      title: "Community Role",
      icon: <MapPin className="hist-icon" />,
      text: "As a cornerstone of Dharapani-9, we empower students to pursue professional pathways and higher studies, significantly increasing regional educational access."
    }
  ];

  return (
    <section className="hero-container">
      {/* 1. Hero Image */}
      <div className="hero-image-wrapper">
        <img src={Bigpicture} alt="Super Sense School Campus" />
      </div>

      {/* 2. School Title */}
      <header className="school-header">
        <h1>Super Sense Secondary English Boarding School</h1>
        <p className="location-text">Dharapani-9, Dhanushadham, Dhanusha</p>
      </header>

      {/* 3. Purpose Section (Mission/Vision/Target) */}
      <div className="purpose-section">
        <div className="purpose-item">
          <div className="icon-box blue-icon"><Rocket size={32} /></div>
          <div className="text-box">
            <h2>Our Mission</h2>
            <p>To provide a safe, inclusive, and academically rigorous learning environment that nurtures curiosity, discipline, and integrity through modern teaching methods.</p>
          </div>
        </div>

        <div className="purpose-item reverse">
          <div className="icon-box gold-icon"><Lightbulb size={32} /></div>
          <div className="text-box">
            <h2>Our Vision</h2>
            <p>To become a leading educational institution recognized for excellence in academics, character building, and innovation, shaping responsible global citizens.</p>
          </div>
        </div>

        <div className="purpose-item">
          <div className="icon-box green-icon"><Target size={32} /></div>
          <div className="text-box">
            <h2>Our Target</h2>
            <p>To ensure holistic development by balancing academic achievement with extracurricular engagement, technology integration, and ethical growth.</p>
          </div>
        </div>
      </div>

      {/* 4. History Section (Grid) */}
      <div className="history-container">
        <div className="history-header">
          <h2>School Background & History</h2>
          <div className="accent-line"></div>
        </div>
        <div className="school-history-grid">
          {historyItems.map((item, index) => (
            <div key={index} className="history-card">
              <div className="history-icon-wrapper">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero_details;