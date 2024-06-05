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
    <div className='grid md:grid-cols-2' >
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
      {/* contact */}
      <div className="contact-form-container">
      <h2>Let's talk.</h2>
      <form>
        <label>
          Name*
          <input type="text" name="name" required placeholder="Name"/>
        </label>
        <label>
          Email*
          <input type="email" name="email" required placeholder="Email" />
        </label>
        <label>
          Phone*
          <input type="tel" name="phone" required placeholder="Phone Number"/>
        </label>
        <label>
          Message*
          <textarea name="message" required placeholder="Type your message here" />
        </label>
        <div className="note">
          Note: We'll keep your idea confidential with a signed NDA.
        </div>
        <input type="checkbox" name="agree" required />
        <button type="submit">এখানে আবেদন করুন</button>
      </form>
    </div>
    </div>
  );
};

export default Reviews;