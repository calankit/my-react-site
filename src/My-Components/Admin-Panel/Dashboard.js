import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Chart from 'chart.js/auto';

const Dashboard = () => {
  const [services, setServices] = useState([]);
  const [sliders, setSliders] = useState([]);
  const [about, setAbout] = useState([]);

  useEffect(() => {
    const localServices = JSON.parse(localStorage.getItem('services')) || [];
    const localSliders = JSON.parse(localStorage.getItem('sliders')) || [];
    const localAbout = JSON.parse(localStorage.getItem('aboutInfo')) || [];

    setServices(localServices);
    setSliders(localSliders);
    setAbout(localAbout);

    const servicesChart = new Chart('servicesChart', {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Services Added',
          data: [0, 2, 2, 3, 4, localServices.length],
          borderColor: '#0d6efd',
          backgroundColor: 'rgba(13,110,253,0.2)',
          fill: true,
          tension: 0.4
        }]
      },
    });

    const sliderAboutChart = new Chart('sliderAboutChart', {
      type: 'bar',
      data: {
        labels: ['Sliders', 'About Us'],
        datasets: [{
          label: 'Entries',
          data: [localSliders.length, localAbout.length],
          backgroundColor: ['#198754', '#ffc107']
        }]
      }
    });

    return () => {
      servicesChart.destroy();
      sliderAboutChart.destroy();
    };
  }, []);

  return (
    <div className="container-fluid mt-4">
      <h2 className="mb-4 fw-bold">Dashboard</h2>

      {/* Cards Section */}
      <div className="row g-4 mb-4">
        <div className="col-md-4">
          <Link to="/admin/viewservice" className="text-decoration-none">
            <div className="card bg-primary text-white text-center h-100 hover-shadow">
              <div className="card-body">
                <h5>Services</h5>
                <p className="fs-4">{services.length}</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-4">
          <Link to="/admin/viewslider" className="text-decoration-none">
            <div className="card bg-success text-white text-center h-100 hover-shadow">
              <div className="card-body">
                <h5>Sliders</h5>
                <p className="fs-4">{sliders.length}</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-4">
          <Link to="/admin/addabout" className="text-decoration-none">
            <div className="card bg-warning text-white text-center h-100 hover-shadow">
              <div className="card-body">
                <h5>About Us Entries</h5>
                <p className="fs-4">{about.length}</p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Charts */}
      <div className="row mt-5">
        <div className="col-md-6 mb-4">
          <div className="card shadow">
            <div className="card-body">
              <h5>Services Overview</h5>
              <canvas id="servicesChart" />
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card shadow">
            <div className="card-body">
              <h5>Sliders & About Overview</h5>
              <canvas id="sliderAboutChart" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
