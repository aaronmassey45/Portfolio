import React, { useState } from 'react';
import PropTypes from 'prop-types';

import FormInput from 'components/form-input/FormInput';
import './contact-form.styles.scss';

const ContactForm = ({ setSnackbarMsg }) => {
  const [fields, setFields] = useState({ name: '', message: '', email: '' });
  const { name, message, email } = fields;

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await fetch('https://app.99inbound.com/api/e/cjNByqpy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(fields),
      });
      const json = await response.json();
      setFields({ name: '', message: '', email: '' });
      setSnackbarMsg(json.submission_text);
    } catch (error) {
      setSnackbarMsg('Form did not submit, please try again');
    }
  };

  const handleChange = e => {
    const { name: field, value } = e.target;
    setFields({ ...fields, [field]: value });
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <FormInput
        name="name"
        value={name}
        onChange={handleChange}
        label="Name"
        required
      />
      <FormInput
        name="email"
        value={email}
        onChange={handleChange}
        label="Email"
        required
        type="email"
      />
      <FormInput
        name="message"
        value={message}
        onChange={handleChange}
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

ContactForm.propTypes = { setSnackbarMsg: PropTypes.func.isRequired };

export default ContactForm;
