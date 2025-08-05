import React, { useEffect, useState } from 'react';
import { Modal } from 'bootstrap'; // Import Bootstrap Modal directly
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Bootstrap JS (includes Popper)
import 'bootstrap/dist/css/bootstrap.min.css'; // Optional: Bootstrap CSS

const ViewSlider = () => {
    const [services, setServices] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [editedService, setEditedService] = useState({ name: '', description: '', image: '' });

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('services') || '[]');
        setServices(items.reverse());
    }, []);

    const deleteService = (index) => {
        const updated = [...services];
        updated.splice(index, 1);
        setServices(updated);
        localStorage.setItem('services', JSON.stringify([...updated].reverse()));
    };

    const openEditModal = (index) => {
        setEditIndex(index);
        setEditedService({ ...services[index] });

        // Show modal manually
        const modalElement = document.getElementById('editServiceModal');
        const modal = new Modal(modalElement);
        modal.show();
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedService(prev => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setEditedService(prev => ({ ...prev, image: reader.result }));
            };
            reader.readAsDataURL(file);
        }
    };

    const saveEditedService = () => {
        const updated = [...services];
        updated[editIndex] = editedService;
        setServices(updated);
        localStorage.setItem('services', JSON.stringify([...updated].reverse()));

        // Hide modal
        const modalElement = document.getElementById('editServiceModal');
        const modal = Modal.getInstance(modalElement);
        modal.hide();
    };

    return (
        <div className="container mt-4">
            <h3>All Services</h3>
            {services.length === 0 ? (
                <p className="text-muted">No services added.</p>
            ) : (
                <div className="table-responsive">
                    <table className="table table-striped align-middle">
                        <thead className="table-dark">
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Image</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {services.map((s, idx) => (
                                <tr key={idx}>
                                    <td>{s.name}</td>
                                    <td>{s.description}</td>
                                    <td><img src={s.image} alt={s.name} style={{ maxHeight: '80px' }} /></td>
                                    <td>
                                        <button className="btn btn-sm btn-primary me-2" onClick={() => openEditModal(idx)}>Edit</button>
                                        <button className="btn btn-sm btn-danger" onClick={() => deleteService(idx)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Edit Modal */}
            <div className="modal fade" id="editServiceModal" tabIndex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="editModalLabel">Edit Service</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    value={editedService.name}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Description</label>
                                <textarea
                                    className="form-control"
                                    name="description"
                                    value={editedService.description}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Image</label>
                                <input type="file" className="form-control" onChange={handleImageChange} />
                                {editedService.image && (
                                    <img
                                        src={editedService.image}
                                        alt="Preview"
                                        className="img-fluid mt-2"
                                        style={{ maxHeight: '100px' }}
                                    />
                                )}
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-success" onClick={saveEditedService}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewSlider;
