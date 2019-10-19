import React from "react";

import "./card.scss";

const Card = ({ title, description }) => {
  return (
    <div className="card">
      <div className="content">
        <div className="image"></div>
        <div className="overlay">
          <div>
            <p className="text-gray-800">{title}</p>

            <p className="text-sm text-gray-600">{description}</p>
          </div>
          <a className="button" href="#">
            Action
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
