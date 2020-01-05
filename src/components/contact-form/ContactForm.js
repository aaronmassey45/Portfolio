import React from 'react';
import PropTypes from 'prop-types';

import FormInput from 'components/form-input/FormInput';

const ContactForm = ({ formFields, handleFormSubmit, handleInputChange }) => {
  const { email, message, name } = formFields;

  return (
    <form onSubmit={handleFormSubmit} className="contact-form">
      <FormInput
        name="name"
        value={name}
        onChange={handleInputChange}
        label="Name"
        required
      />
      <FormInput
        name="email"
        value={email}
        onChange={handleInputChange}
        label="Email"
        required
        type="email"
      />
      <FormInput
        name="message"
        value={message}
        onChange={handleInputChange}
        label="Message"
        Element="textarea"
        required
      />
      <button className="button" type="submit">
        Send Form
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  formFields: PropTypes.shape({
    email: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

export default ContactForm;
