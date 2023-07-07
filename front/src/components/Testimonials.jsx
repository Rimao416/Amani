import React from "react";
function Testimonials({author,testimony}) {
  return (
    <div>
        <h3>{author}</h3>
        <p>{testimony}</p>
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
