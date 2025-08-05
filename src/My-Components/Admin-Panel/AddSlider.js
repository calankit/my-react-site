import React, { useState } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // 👈 Import Bootstrap JS


const AddSlider = () => {
  const [title, setTitle] = useState('');
  const [imageFile, setImageFile] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!title || !imageFile) return alert('Fill all fields.');

    const reader = new FileReader();
    reader.onload = () => {
      const existing = JSON.parse(localStorage.getItem('sliders') || '[]');
      existing.push({ title, image: reader.result });
      localStorage.setItem('sliders', JSON.stringify(existing));
      alert('Slider added!');
      setTitle(''); setImageFile(null);
    };
    reader.readAsDataURL(imageFile);
  };

  return (
    <div className="card p-4 mt-5">
      <h3>Add New Slider</h3>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label>Title</label>
          <input className="form-control" value={title} onChange={e => setTitle(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label>Image</label>
          <input type="file" accept="image/*" className="form-control" onChange={e => setImageFile(e.target.files[0])} required />
        </div>
        <button className="btn btn-primary" type="submit">Add Slider</button>
      </form>
    </div>
  );
};

export default AddSlider;
