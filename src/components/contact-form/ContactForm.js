import React, { useState } from 'react';

import FormInput from '../form-input/FormInput';

import './contact-form.styles.scss';

const ContactForm = () => {
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
      alert(json.submission_text);
    } catch (error) {
      console.log(error);
      alert('Form did not submit, please try again');
    }
    return;
  };

  const handleChange = e => {
    const { name, value } = e.target;

    setFields({ ...fields, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <FormInput
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        label="Name"
        required
      />
      <FormInput
        type="text"
        name="email"
        value={email}
        onChange={handleChange}
        label="Email"
        required
      />
      <FormInput
        name="message"
        value={message}
        onChange={handleChange}
        label="Message"
        isTextArea
        required
      />
      <button className="button" type="submit">
        Send Form
      </button>
    </form>
  );
};

export default ContactForm;
