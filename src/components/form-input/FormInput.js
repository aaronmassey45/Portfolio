import React from 'react';
import PropTypes from 'prop-types';

import './form-input.styles.scss';

const FormInput = ({
  Element,
  label,
  name,
  onChange,
  required,
  type,
  value,
}) => (
  <div className="group">
    <Element
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

FormInput.propTypes = {
  Element: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
};

FormInput.defaultProps = {
  Element: 'input',
  required: true,
  type: 'text',
};

export default FormInput;
