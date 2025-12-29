import React, { useState } from "react";
import "./Campus.css";
import gallery1 from "../../Assets/gallery1.png";
import gallery2 from "../../Assets/gallery2.png";
import gallery3 from "../../Assets/gallery3.png";
import gallery4 from "../../Assets/gallery4.png";
import gallery5 from "../../Assets/gallery4.png";
import gallery6 from "../../Assets/gallery4.png";
import gallery7 from "../../Assets/gallery4.png";
import gallery8 from "../../Assets/gallery4.png";
import gallery9 from "../../Assets/gallery4.png";
import gallery10 from "../../Assets/gallery4.png";
import gallery11 from "../../Assets/gallery4.png";
import gallery12 from "../../Assets/gallery4.png";
import arrow from "../../Assets/dark-arrow.png";
import back_icon_2 from "../../Assets/back_icon_2.png";
import next_icon_2 from "../../Assets/next_icon_2.png";

const Campus = () => {
  const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7 ,gallery8, gallery9, gallery10, gallery11, gallery12];
  const [activeIndex, setActiveIndex] = useState(5);
  const [isAnimating, setIsAnimating] = useState(false);
  const totalImages = images.length;

  // Get visible range of images (3 to left, center, 3 to right = 7 total)
  const getVisibleImages = () => {
    const visibleIndices = [];
    
    // Show 3 images to the left, center, and 3 to the right
    for (let i = -3; i <= 3; i++) {
      const index = activeIndex + i;
      if (index >= 0 && index < totalImages) {
        visibleIndices.push({
          index,
          position: i, // Position relative to center (-3, -2, -1, 0, 1, 2, 3)
          isActive: i === 0
        });
      }
    }
    
    return visibleIndices;
  };

  const nextImage = () => {
    if (isAnimating || activeIndex >= totalImages - 1) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => prev + 1);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 700);
  };

  const backImage = () => {
    if (isAnimating || activeIndex <= 0) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => prev - 1);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 700);
  };

  // Check if navigation buttons should be disabled
  const canGoBack = activeIndex > 0;
  const canGoNext = activeIndex < totalImages - 1;

  return (
    <div className="campus" name="campus">
      <div className="option-btn">
        <button>Sport</button>
        <button>Tour</button>
        <button>Saraswati Puja</button>
        <button>Children's Day</button>
        <button>Picinic</button>
        <button>Result Day</button>
        <button>Happy moments</button>
        <button className="search-more">
          See More Here
          <img className="arrow" src={arrow} alt="" />
        </button>
      </div>

      <div className="gallery-wrapper">
        <div className="gallery">
          {getVisibleImages().map(({ index, position, isActive }) => (
            <div
              key={index}
              className={`image-container ${isActive ? 'active' : ''}`}
              style={{
                '--position': position,
                '--distance': Math.abs(position),
              }}
            >
              <img
                className="images"
                src={images[index]}
                alt={`Gallery ${index + 1}`}
              />
              
              <img className="more-information" src={arrow} alt="" />

            </div>
          ))}
        </div>
      </div>

      <div className="change-options">
        <img 
          src={back_icon_2} 
          onClick={backImage} 
          className={!canGoBack || isAnimating ? 'disabled' : ''} 
          alt="Previous"
        />
        <div className="counter">
          {activeIndex + 1} / {totalImages}
        </div>
        <img 
          src={next_icon_2} 
          onClick={nextImage} 
          className={!canGoNext || isAnimating ? 'disabled' : ''} 
          alt="Next"
        />
      </div>
    </div>
  );
};

export default Campus;