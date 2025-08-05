import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <nav
    className="bg-dark text-white d-flex flex-column justify-content-between p-3"
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      height: '100vh',
      width: '250px',
      overflowY: 'auto',
      zIndex: 1000
    }}
  >
    {/* Top Section: Navigation */}
    <div>
      <div className="sidebar-heading text-white fw-bold mb-4 fs-4">Tailor Admin</div>

      <button className="btn text-white w-100 text-start mb-3 fw-bold">
        <i className="bi bi-speedometer2 me-2"></i> Dashboard
      </button>

      {/* Slider */}
      <button className="btn text-white w-100 text-start mb-2" data-bs-toggle="collapse" data-bs-target="#sliderMenu">
        <i className="bi bi-images me-2"></i> Slider
      </button>
      <div className="collapse" id="sliderMenu">
        <Link to="/add-slider" className="text-white ms-4 d-block my-1 text-decoration-none">Add Slider</Link>
        <Link to="/view-slider" className="text-white ms-4 d-block my-1 text-decoration-none">View Sliders</Link>
      </div>

      {/* Services */}
      <button className="btn text-white w-100 text-start mt-3 mb-2" data-bs-toggle="collapse" data-bs-target="#serviceMenu">
        <i className="bi bi-briefcase me-2"></i> Services
      </button>
      <div className="collapse" id="serviceMenu">
        <Link to="/add-service" className="text-white ms-4 d-block my-1 text-decoration-none">Add Service</Link>
        <Link to="/view-service" className="text-white ms-4 d-block my-1 text-decoration-none">View Services</Link>
      </div>

      {/* About */}
      <button className="btn text-white w-100 text-start mt-3 mb-2" data-bs-toggle="collapse" data-bs-target="#aboutMenu">
        <i className="bi bi-info-circle me-2"></i> About
      </button>
      <div className="collapse" id="aboutMenu">
        <Link to="/add-about" className="text-white ms-4 d-block my-1 text-decoration-none">Update About</Link>
      </div>

      {/* Settings */}
      <button className="btn text-white w-100 text-start mt-3 mb-2" data-bs-toggle="collapse" data-bs-target="#settingsMenu">
        <i className="bi bi-gear me-2"></i> Settings
      </button>
      <div className="collapse" id="settingsMenu">
        <Link to="/settings" className="text-white ms-4 d-block my-1 text-decoration-none">Update</Link>
      </div>
    </div>


  </nav>
);

export default Sidebar;
