import React, { useEffect, useState } from "react";

const Contact = () => {
  const [contactInfo, setContactInfo] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("contactInfo"));
    if (data) {
      setContactInfo(data);
    }
  }, []);

  return (
    <section id="contact" className="py-5 bg-light mb-5">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">Contact Us</h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                {!contactInfo ? (
                  <p className="text-center text-muted">
                    Contact information not available. Please check back later.
                  </p>
                ) : (
                  <>
                    <h4 className="text-center text-primary fw-bold mb-4">
                      {contactInfo.shopName}
                    </h4>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        <strong>Owner:</strong> {contactInfo.ownerName}
                      </li>
                      <li className="list-group-item">
                        <strong>Address:</strong> {contactInfo.address}
                      </li>
                      <li className="list-group-item">
                        <strong>Email:</strong>{" "}
                        <a
                          href={`mailto:${contactInfo.email}`}
                          className="text-decoration-none"
                        >
                          {contactInfo.email}
                        </a>
                      </li>
                      <li className="list-group-item">
                        <strong>Phone:</strong>{" "}
                        <a
                          href={`tel:${contactInfo.phone}`}
                          className="text-decoration-none"
                        >
                          {contactInfo.phone}
                        </a>
                      </li>
                      <li className="list-group-item">
                        <strong>Opening Hours:</strong> {contactInfo.hours}
                      </li>
                      <li className="list-group-item">
                        <strong>Note:</strong> {contactInfo.note}
                      </li>
                    </ul>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
