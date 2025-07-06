import { useState } from 'react';

export default function InputForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && location) {
        setError(false);
      onSubmit({ name, location });
    } else {
     setError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4">
      <input className="border p-2 w-full" placeholder="Business Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input className="border p-2 w-full" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
      {error && <p style={{color:"red"}}>Both Fields are required</p>}
    </form>
  );
}
