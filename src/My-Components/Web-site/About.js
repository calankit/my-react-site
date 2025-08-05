import React, { useEffect, useState } from "react";

const About = () => {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    const aboutData = JSON.parse(localStorage.getItem("aboutInfo"));
    if (Array.isArray(aboutData) && aboutData.length > 0) {
      setAbout(aboutData[aboutData.length - 1]); // Get latest About entry
    }
  }, []);

  return (
    <section id="about" className="py-5 bg-light mt-5">
      <div className="container mt-5">
        <h2 className="text-center mb-5 fw-bold">About Us</h2>
        <div className="row align-items-center justify-content-center">
          {about ? (
            <>
              <div className="col-md-6 mb-4 mb-md-0">
                <img
                  src={about.image}
                  alt="About"
                  className="img-fluid rounded shadow"
                  style={{ maxHeight: "400px", objectFit: "cover" }}
                />
              </div>
              <div className="col-md-6">
                <h4 className="fw-bold mb-3">{about.title}</h4>
                <p className="text-muted">{about.description}</p>
              </div>
            </>
          ) : (
            <div className="col-12 text-center text-muted">
              No About info available yet.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
