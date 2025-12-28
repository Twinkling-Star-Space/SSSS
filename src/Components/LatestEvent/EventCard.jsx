import React from 'react';
import './LatestEvent.css';

const EventCard = ({ imgSrc, title, description }) => {
  return (
    <div className="event-card">
      <img src={imgSrc} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default EventCard;
