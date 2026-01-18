import React from "react";
import "./Quote.css";
import principal_photo from "../../assets/principal_photo.png";
import quote_icon from "../../assets/quote_icon.png";
import dark_arrow from '../../assets/dark-arrow.png'

const Quote = () => {
  return (
    <div className="quote">
      <div className="photo">
        <img src={principal_photo} alt="" />
      </div>
      <div className="details">
        <p>
          <img src={quote_icon} alt="" /> Our school is not only a place to
          achieve results, but a place to grow character, curiosity, and
          confidence.
        </p>

        <h4>Read More <img  src={dark_arrow} alt="" /></h4>
        <div className="principal_details">
        <h2>Mr. Niroj Dhakal</h2>
        <h3>Principal</h3>
        </div>
       
      </div>
    </div>
  );
};

export default Quote;
