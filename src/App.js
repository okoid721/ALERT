// src/App.js
import React, { useState } from 'react';

function App() {
  const [senderName, setSenderName] = useState('');
  const [recipientNumber, setRecipientNumber] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); // State for success message

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage('SMS sent successfully!'); // Set success message directly

    // Reset the form
    setSenderName('');
    setRecipientNumber('');
    setMessage('');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-500 p-4"> 
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-[30px] font-bold mb-4 text-center">FAKE BANK ALERT</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Bank Name</label>
          <input
            type="text"
            value={senderName}
            placeholder="Bank Name"
            onChange={(e) => setSenderName(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Recipient's Number</label>
          <input
            type="tel"
            value={recipientNumber}
            placeholder="Recipient's Number"
            onChange={(e) => setRecipientNumber(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            value={message}
            placeholder="Message"
            onChange={(e) => setMessage(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            rows="4"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600"
        >
          Send SMS
        </button>
        {successMessage && ( // Display success message if it exists
          <div className="mt-4 text-green-600 font-semibold">
            {successMessage}
          </div>
        )}
      </form>
    </div>
  );
}

export default App;