import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CouncilPage = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const showSlides = () => {
      let i;
      const slides = document.querySelectorAll('.slide');

      for (i = 0; i < slides.length; i++) {
        slides[i].style.opacity = '0';
      }

      setSlideIndex((prevIndex) => {
        let newIndex = prevIndex + 1;

        if (newIndex >= slides.length) {
          newIndex = 0;
        }

        slides[newIndex].style.opacity = '1';

        return newIndex;
      });
    };

    const intervalId = setInterval(showSlides, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <div className="slideshow">
        {/* Slide 1 */}
        <Link to="/">
          <div className={`slide ${slideIndex === 0 ? 'active' : ''}`} style={{ backgroundImage: "url('/static/images/slideshow_1.jpg')" }}>
            <div className="slide-content">
              <h1>Welcome to the CS Outreach Council</h1>
              <p>Find details about different activities we host from this website.</p>
            </div>
          </div>
        </Link>

        {/* Slide 2 */}
        <Link to="/codefest">
          <div className={`slide ${slideIndex === 1 ? 'active' : ''}`} style={{ backgroundImage: "url('/static/images/slideshow_2.png')", backgroundPosition: 'center top -350px', backgroundSize: 'cover' }}>
            <div className="slide-content">
              <h1>Spooktastic Codefest</h1>
              <p>Join us for an exciting event on October 26</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CouncilPage;
