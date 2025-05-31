import React from "react";
import "./Card.css"; // We'll create this CSS file next

const BeautifulCard = ({ title, description, imageUrl }) => {
  return (
    <div className="card">
      <div className="card-image-container">
        <img src={imageUrl} alt={title} className="card-image" />
        <h1>hello abhi</h1>
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <button className="card-button">Learn More</button>
      </div>
    </div>
  );
};

export default BeautifulCard;