import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import './Admin-Styling/AdminLayout.css';

const AdminLayout = () => {
  const location = useLocation();

  // States for collapsible menus
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menuId) => {
    setOpenMenu(openMenu === menuId ? null : menuId);
  };

  return (
    <div id="wrapper" className="d-flex">
      {/* Sidebar */}
      <nav
        id="sidebar-wrapper"
        className="bg-dark text-white d-flex flex-column justify-content-between p-3"
        style={{ width: '250px', height: '100vh', position: 'fixed' }}
      >
        {/* Top Section */}
        <div>
          <div className="sidebar-heading fw-bold fs-4 mb-4">Tailor Admin</div>

          <Link
            to="/admin"
            className={`btn text-white w-100 text-start mb-3 fw-bold ${location.pathname === '/admin' ? 'active' : ''}`}
          >
            <i className="bi bi-speedometer2 me-2"></i> Dashboard
          </Link>

          {/* Slider Menu */}
          <button
            className="btn text-white w-100 text-start mb-2"
            onClick={() => toggleMenu('slider')}
          >
            <i className="bi bi-images me-2"></i> Slider
          </button>
          {openMenu === 'slider' && (
            <div className="ms-3">
              <Link to="/admin/addslider" className="d-block text-white my-1">Add Slider</Link>
              <Link to="/admin/viewslider" className="d-block text-white my-1">View Sliders</Link>
            </div>
          )}

          {/* Services Menu */}
          <button
            className="btn text-white w-100 text-start mb-2 mt-3"
            onClick={() => toggleMenu('services')}
          >
            <i className="bi bi-briefcase me-2"></i> Services
          </button>
          {openMenu === 'services' && (
            <div className="ms-3">
              <Link to="/admin/addservice" className="d-block text-white my-1">Add Service</Link>
              <Link to="/admin/viewservice" className="d-block text-white my-1">View Services</Link>
            </div>
          )}

          {/* About Menu */}
          <button
            className="btn text-white w-100 text-start mb-2 mt-3"
            onClick={() => toggleMenu('about')}
          >
            <i className="bi bi-info-circle me-2"></i> About
          </button>
          {openMenu === 'about' && (
            <div className="ms-3">
              <Link to="/admin/addabout" className="d-block text-white my-1">Update About</Link>
            </div>
          )}

          {/* Settings Menu */}
          <button
            className="btn text-white w-100 text-start mb-2 mt-3"
            onClick={() => toggleMenu('settings')}
          >
            <i className="bi bi-gear me-2"></i> Settings
          </button>
          {openMenu === 'settings' && (
            <div className="ms-3">
              <Link to="/admin/update" className="d-block text-white my-1">Update</Link>
            </div>
          )}
        </div>

        {/* Bottom Section (Footer) */}
        <div className="pt-3 border-top border-secondary">
          <Link to="/" className="text-white d-block mb-2">
            <i className="bi bi-house-door me-2"></i> Go to Site
          </Link>
          <Link to="/login" className="text-white d-block">
            <i className="bi bi-box-arrow-right me-2"></i> Logout
          </Link>
        </div>
      </nav>

      {/* Main Content Area */}
      <div
        className="flex-grow-1 p-4 bg-light"
        style={{ marginLeft: '250px', minHeight: '100vh' }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
