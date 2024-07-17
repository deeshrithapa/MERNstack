import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegistration } from './RegistrationContext';


const EventSelect = () => {
  const { formData, setFormData } = useRegistration();
  const [event, setEvent] = useState(formData.event || '');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleNext = () => {
    if (event) {
      setFormData({ ...formData, event });
      navigate('/confirmation');
    } else {
      setError('Please select an event.');
    }
  };

  return (
    <div className="container mx-auto p-36 flex justify-center">
      <div className="bg-blue-100 text-black p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl mb-4 font-semibold">Step 3: Event Selection</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block mb-2">Event</label>
          <select
            value={event}
            onChange={(e) => setEvent(e.target.value)}
            className="border border-gray-300 p-2 w-full rounded"
          >
            <option value="">Select an event</option>
            <option value="Annual Day">Annual Day</option>
            <option value="Music Fest">Music Fest</option>
            <option value="Social Night">Social Night</option>
          </select>
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

export default EventSelect;
