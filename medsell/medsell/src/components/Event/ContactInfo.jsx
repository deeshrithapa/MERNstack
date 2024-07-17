import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegistration } from './RegistrationContext';



const ContactInfo = () => {
  const { formData, setFormData } = useRegistration();
  const [address, setAddress] = useState(formData.address || '');
  const [phone, setPhone] = useState(formData.phone || '');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleNext = () => {
    if (address && phone) {
      setFormData({ ...formData, address, phone });
      navigate('/step-three');
    } else {
      setError('Please fill out all fields.');
    }
  };

  return (
    <div className="container mx-auto p-36 flex justify-center">
      <div className="bg-blue-100 text-black p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl mb-4 font-semibold">Step 2: Contact Information</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block mb-2">Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="border border-gray-300 p-2 w-full rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Phone</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border border-gray-300 p-2 w-full rounded"
          />
        </div>
        <button
          onClick={handleNext}
          className="bg-slate-800 hover:bg-slate-400 text-white py-2 px-4 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ContactInfo;