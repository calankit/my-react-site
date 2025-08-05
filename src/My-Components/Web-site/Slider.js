import React, { useEffect, useState } from "react";

const Slider = () => {
  const [sliders, setSliders] = useState([]);

  useEffect(() => {
    const storedSliders = JSON.parse(localStorage.getItem("sliders")) || [];
    setSliders(storedSliders);
  }, []);

  if (sliders.length === 0) {
    return (
      <div className="container text-center my-5">
        <h4 className="text-muted">No sliders to show</h4>
      </div>
    );
  }

  return (
    <div className="container-fluid my-5">
      <div
        id="carouselExampleInterval"
        className="carousel slide mt-5"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner" id="sliderContainer">
          {sliders.map((slider, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img
                src={slider.image}
                className="d-block w-100"
                alt={slider.title || `Slider ${index + 1}`}
              />
              {slider.title && (
                <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded">
                  <h5>{slider.title}</h5>
                </div>
              )}
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" />
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
