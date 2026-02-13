import { useState } from "react";
import "./Slideshow.scss";

function Slideshow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = pictures.length;

  const goToNext = () => {
    setCurrentIndex((currentIndex + 1) % total);
  };

  const goToPrevious = () => {
    setCurrentIndex((currentIndex - 1 + total) % total);
  };

  const showArrows = total > 1;

  return (
    <div className="slideshow">
      <img
        src={pictures[currentIndex]}
        alt={`Logement ${currentIndex + 1}`}
        className="slideshow_image"
      />

      {showArrows && (
        <>
          <button className="slideshow_arrow_left" onClick={goToPrevious}>
            &#10094;
          </button>
          <button className="slideshow_arrow_right" onClick={goToNext}>
            &#10095;
          </button>
        </>
      )}

      {showArrows && (
        <div className="slideshow_counter">
          {currentIndex + 1} / {total}
        </div>
      )}
    </div>
  );
}

export default Slideshow;
