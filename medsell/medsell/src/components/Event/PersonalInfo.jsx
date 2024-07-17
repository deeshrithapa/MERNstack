import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegistration } from './RegistrationContext';

const PersonalInfo = () => {
  const { formData, setFormData } = useRegistration();
  const [name, setName] = useState(formData.name || '');
  const [email, setEmail] = useState(formData.email || '');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleNext = () => {
    if (name && email) {
      setFormData({ ...formData, name, email });
      navigate('/step-two');
    } else {
      setError('Please fill out all fields.');
    }
  };

  return (
    <div className="container mx-auto p-36 flex justify-center ">
      <div className="bg-blue-100 text-black p-8 rounded shadow-md w-full max-w-md ">
        <h1 className="text-2xl mb-4 font-semibold">Step 1: Personal Information</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block mb-2">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 p-2 w-full rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 p-2 w-full rounded"
          />
        </div>
        <button
          onClick={handleNext}
          className="bg-slate-800 hover:bg-slate-400 text-white py-2 px-4 rounded w-24"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PersonalInfo;
