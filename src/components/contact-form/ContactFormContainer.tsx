/* eslint-disable object-curly-newline */
/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';

import submitContactHandler from 'apis/submitContactHandler';
import ContactForm from 'components/contact-form/ContactForm';

import './contact-form.styles.scss';

interface IContactFormContainerProps {
  setSnackbarMsg: any;
}

const INITIAL_FIELDS = { name: '', message: '', email: '' };

const ContactFormContainer = ({
  setSnackbarMsg,
}: IContactFormContainerProps) => {
  const [fields, setFields] = useState({ ...INITIAL_FIELDS });

  const handleFormSubmit = async (e: React.SyntheticEvent) => {
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

export default ContactFormContainer;
