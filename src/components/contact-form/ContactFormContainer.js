import React, { useState } from 'react';
import PropTypes from 'prop-types';

import submitContactHandler from 'apis/submitContactHandler';
import ContactForm from 'components/contact-form/ContactForm';

import './contact-form.styles.scss';

const INITIAL_FIELDS = { name: '', message: '', email: '' };

const ContactFormContainer = ({ setSnackbarMsg }) => {
  const [fields, setFields] = useState({ ...INITIAL_FIELDS });

  const handleFormSubmit = async e => {
    e.preventDefault();

    if (fields.message.trim().length === 0) {
      setFields({ ...fields, message: '' });
      setSnackbarMsg('Please enter a message!');
      return;
    }

    try {
      const response = await submitContactHandler(fields);
      const json = await response.json();
      setFields({ ...INITIAL_FIELDS });
      setSnackbarMsg(json.submission_text);
    } catch (error) {
      setSnackbarMsg('Form did not submit, please try again');
    }
  };

  const handleInputChange = e => {
    const { name: field, value } = e.target;
    setFields({ ...fields, [field]: value });
  };

  return (
    <ContactForm
      formFields={fields}
      handleFormSubmit={handleFormSubmit}
      handleInputChange={handleInputChange}
    />
  );
};

ContactFormContainer.propTypes = { setSnackbarMsg: PropTypes.func.isRequired };

export default ContactFormContainer;
