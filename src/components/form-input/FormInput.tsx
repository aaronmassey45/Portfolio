/* eslint-disable react/require-default-props */
import React from 'react';

import { IContactFormProps } from 'components/contact-form/ContactForm';

import './form-input.styles.scss';

interface IFormInputProps {
  label: string;
  name: string;
  onChange: IContactFormProps['handleInputChange'];
  required: boolean;
  tagName?: any;
  type?: string;
  value: string;
};

const FormInput = ({
  label,
  name,
  onChange,
  required = true,
  tagName: InputElement = 'input',
  type = 'text',
  value,
}: IFormInputProps) => (
  <div className="group">
    <InputElement
      className="form-input"
      name={name}
      onChange={onChange}
      required={required}
      type={type}
      value={value}
    />
    {label && (
      <label
        className={`${value.length ? 'shrink' : ''} form-input-label`}
        htmlFor={name}
      >
        {label}
      </label>
    )}
  </div>
);

export default FormInput;
