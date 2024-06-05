import React from 'react';

import "./reviews.css"
const reviews = [
    {
      rating: 5.0,
      text: "They successfully delivered a top-notch software solution that aligns perfectly with our needs.",
      author: "Guest Services Coordinator, Crimson Wine Group",
      verified: true
    },
    {
      rating: 5.0,
      text: "They actively listened to our requirements and promptly addressed any issues that arose.",
      author: "CEO, Grupo Maito",
      verified: true
    },
    {
      rating: 5.0,
      text: "They always went the extra mile to offer additional support and assistance.",
      author: "Founder, Living Loop",
      verified: true
    },
    {
      rating: 5.0,
      text: "They actively listened to my requirements and addressed any concerns promptly.",
      author: "Founder & Senior Software Engineer, Rhynosoft Technologies",
      verified: true
    },
    {
      rating: 5.0,
      text: "I was impressed with their punctuality.",
      author: "Product Development Head, Zebronics",
      verified: true
    },
    {
      rating: 5.0,
      text: "Their professionalism and dedication significantly contributed to the success of the project.",
      author: "Head of Engineering, Aesop",
      verified: true
    }
  ];


const Reviews = () => {
    return (
        <div  >
            <div className="reviews-container">
      <h2>Trainer-X Solution Reviews <span>5.0 <span className="stars">★★★★★</span></span></h2>
      <div className="reviews-grid">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <div className="rating">{review.rating} <span className="stars">★★★★★</span></div>
            <p>{review.text}</p>
            <p><strong>{review.author}</strong></p>
            {review.verified && <p className="verified">✔ Verified Review</p>}
          </div>
        ))}
      </div>
    </div>
        </div>
    );
};

export default Reviews;