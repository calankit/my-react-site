import React, { useEffect, useState } from "react";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("services")) || [];
    setServices(data);
  }, []);

  // Utility function to chunk array into groups of 4
  const chunkArray = (array, size) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  };

  const serviceChunks = chunkArray(services, 4);

  return (
    <section id="services" className="py-5 bg-white mt-5">
      <div className="container mt-5">
        <h2 className="text-center mb-4 fw-bold">Our Tailoring Services</h2>

        {services.length === 0 ? (
          <div className="text-center text-muted">
            <p>No services available. Please check back later.</p>
          </div>
        ) : (
          <div
            id="serviceCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {serviceChunks.map((chunk, index) => (
                <div
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                  key={index}
                >
                  <div className="row">
                    {chunk.map((service, idx) => (
                      <div className="col-md-3" key={idx}>
                        <div
                          className="card shadow mb-3"
                          style={{ minHeight: "420px" }}
                        >
                          <img
                            src={service.image}
                            className="card-img-top"
                            alt={service.title}
                            style={{ height: "200px", objectFit: "cover" }}
                          />
                          <div className="card-body">
                            <h5 className="card-title fw-bold">{service.title}</h5>
                            <p className="card-text text-muted">
                              {service.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Controls */}
            {serviceChunks.length > 1 && (
              <>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#serviceCarousel"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#serviceCarousel"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
