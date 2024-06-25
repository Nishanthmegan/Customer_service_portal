import React, { useState } from 'react';
import axios from 'axios';

function CustomerServiceForm() {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/request', { message })
      .then(response => {
        console.log('Request submitted:', response.data);
      })
      .catch(error => {
        console.error('There was an error submitting the request!', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter your request here"
        required
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
}

export default CustomerServiceForm;

