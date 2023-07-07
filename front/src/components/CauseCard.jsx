import React from "react";

function CauseCard({ image, title, text }) {
  return (
    <div className="card">
      <img src={image} alt="" className="card__logo" />
      <h5 className="card__title">{title}</h5>
      <p className="card__content"> {text}</p>
    </div>
  );
}

export default CauseCard;
