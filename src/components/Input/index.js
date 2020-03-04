import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';


const Input = ({
  label,
  onChange,
  value,
  name,
  disabled,
  error,
}) => (
    <div className={styles.container}>
      {label &&
        <div className={styles.label}>{label} {error && <span className={styles.errorIcon}>*</span>}</div>
      }
      <input
        disabled={disabled}
        name={name}
        type="text"
        onChange={onChange}
        className={`${styles.input} ${error && styles.error}`}
        value={value}
      />
    </div>

  )

Input.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
}

export default Input;