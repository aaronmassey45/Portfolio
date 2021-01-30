import React from 'react';

import FormInput from 'components/form-input/FormInput';

interface IFormField {
  email: string;
  message: string;
  name: string;
}

export interface IContactFormProps {
  formFields: IFormField;
  handleFormSubmit: (e: React.SyntheticEvent) => Promise<void>;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ContactForm = ({ formFields, handleFormSubmit, handleInputChange }: IContactFormProps) => {
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
        tagName="textarea"
        required
      />
      <button className="button" type="submit">
        Send Form
      </button>
    </form>
  );
};

export default ContactForm;
