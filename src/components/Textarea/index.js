import React from 'react';
import PropTypes from 'prop-types';
import styles from './Textarea.module.scss';


const Textarea = ({
  label,
  onChange,
  value,
  name,
  disabled,
  error,
}) => (
    <div className={styles.container}>
      {label &&
        <div className={styles.label}>
         {label}
         {error && <span className={styles.errorIcon}>*</span>}
        </div>
      }
      <textarea
        disabled={disabled}
        name={name}
        onChange={onChange}
        className={`${styles.textarea} ${error && styles.error}`}
        value={value}
      >
      </textarea>
    </div>

  )

Textarea.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
}

export default Textarea;