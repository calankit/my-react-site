import React, { useState } from 'react';

const AddService = () => {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [file, setFile] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name || !desc || !file) return alert('Fill all fields.');

    const reader = new FileReader();
    reader.onload = () => {
      const existing = JSON.parse(localStorage.getItem('services') || '[]');
      existing.push({ name, description: desc, image: reader.result });
      localStorage.setItem('services', JSON.stringify(existing));
      alert('Service added!');
      setName(''); setDesc(''); setFile(null);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="card p-4">
      <h3>Add New Service</h3>
      <form onSubmit={onSubmit}>
        <div className="mb-3"><label>Service Name</label><input className="form-control" value={name} onChange={e => setName(e.target.value)} required /></div>
        <div className="mb-3"><label>Description</label><textarea className="form-control" value={desc} onChange={e => setDesc(e.target.value)} required /></div>
        <div className="mb-3"><label>Image</label><input type="file" accept="image/*" className="form-control" onChange={e => setFile(e.target.files[0])} required /></div>
        <button className="btn btn-primary" type="submit">Add Service</button>
      </form>
    </div>
  );
};

export default AddService;
