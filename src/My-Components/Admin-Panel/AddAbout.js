import React, { useState } from 'react';


const AddAbout = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imageFile, setImageFile] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title || !description || !imageFile) {
            alert("Please fill all fields and upload an image.");
            return;
        }

        const reader = new FileReader();
        reader.onload = () => {
            const imageBase64 = reader.result;

            const aboutData = {
                title,
                description,
                image: imageBase64,
            };

            const existingAbout = JSON.parse(localStorage.getItem("aboutInfo") || "[]");
            existingAbout.push(aboutData);
            localStorage.setItem("aboutInfo", JSON.stringify(existingAbout));

            alert("About section added successfully!");

            // Reset form
            setTitle('');
            setDescription('');
            setImageFile(null);
            document.getElementById("aboutImage").value = "";
        };

        reader.readAsDataURL(imageFile);
    };

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-lg-12">
                    <div className="card border-0">
                        <div className="card-header text-dark bg-light">
                            <h4 className="mb-0">
                                <i className="bi bi-plus-circle me-2"></i> Add About Section
                            </h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="aboutTitle" className="form-label">Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="aboutTitle"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="aboutDescription" className="form-label">Description</label>
                                    <textarea
                                        className="form-control"
                                        id="aboutDescription"
                                        rows="5"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        required
                                    ></textarea>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="aboutImage" className="form-label">Upload Image</label>
                                    <input
                                        className="form-control"
                                        type="file"
                                        id="aboutImage"
                                        accept="image/*"
                                        onChange={(e) => setImageFile(e.target.files[0])}
                                        required
                                    />
                                </div>

                                <div className="d-flex justify-content-between mt-4">
                                    <button type="submit" className="btn btn-primary">
                                        <i className="bi bi-check-circle me-1"></i> Update About Info
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddAbout;
