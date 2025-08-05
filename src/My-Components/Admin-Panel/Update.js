import React, { useState } from 'react';

const Update = () => {
    const [formData, setFormData] = useState({
        shopName: 'Perfect Stitch',
        ownerName: 'Satish Tailor',
        address: '123, Tailor Street, Mumbai, India',
        email: 'contact@perfectstitch.com',
        phone: '+91 98765 43210',
        hours: 'Monday - Saturday, 10:00 AM to 8:00 PM',
        note: 'Visit our shop or call us anytime for appointments or inquiries.'
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('contactInfo', JSON.stringify(formData));
        alert('Contact info updated successfully!');
    };

    return (
        <div>
            <div className="main-content w-100 overflow-y-scroll">
                <div className="container-fluid">
                    <div className="form-section m-3">
                        <h3 className="mb-4 text-center text-dark fw-bold">
                            <i className="bi bi-person-lines-fill me-2"></i>Update Contact Info
                        </h3>

                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="shopName" className="form-label">Shop Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="shopName"
                                    value={formData.shopName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="ownerName" className="form-label">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="ownerName"
                                    value={formData.ownerName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="address" className="form-label">Address</label>
                                <textarea
                                    className="form-control"
                                    id="address"
                                    rows="2"
                                    value={formData.address}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">Phone</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="hours" className="form-label">Opening Hours</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="hours"
                                    value={formData.hours}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="text-center">
                                <button type="submit" className="btn btn-primary w-100">
                                    <i className="bi bi-check-circle me-1"></i> Update
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Update;
