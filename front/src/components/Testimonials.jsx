import quotes from "../assets/icones/quotes.png"
import React from "react";
function Testimonials({ author, testimony }) {
  return (
    <div className="testimonials__card">
    <img src={quotes} className="testimonials__quotes" alt="" />
      <p className="testimonials__comment">{testimony}</p>
      <h3 className="testimonials__author">{author}</h3>
    </div>
  );
}

// {
//   testimonials.map((testimonial) => {
//     return (
//       <Testimonials key={testimonial.id} {...testimonial} />
//   })
// }

export default Testimonials;
