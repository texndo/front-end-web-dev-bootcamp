import React, { useState } from 'react';
import './style.css';

function Form() {
  // Setting initial state to an object
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
  });

  const handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // Alert the user their first and last name, clear `formData.firstName` and `formData.lastName`, clearing the inputs
    alert(`Hello ${formData.firstName} ${formData.lastName}`);
    setFormData({
      firstName: '',
      lastName: '',
    });
  };

  // Notice how each input has a `value`, `name`, and `onChange` prop
  return (
    <div>
      <p>
        Hello {formData.firstName} {formData.lastName}
      </p>
      <form className="form">
        <input
          value={formData.firstName}
          name="firstName"
          onChange={handleInputChange}
          type="text"
          placeholder="First Name"
        />
        <input
          value={formData.lastName}
          name="lastName"
          onChange={handleInputChange}
          type="text"
          placeholder="Last Name"
        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
