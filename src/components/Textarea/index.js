import React from 'react';
import PropTypes from 'prop-types';
import styles from './Textarea.module.scss';


const Textarea = ({
  label,
  onChange,
  value,
}) => (
    <div className={styles.container}>
      {label &&
        <div className={styles.label}>{label}</div>
      }
      <textarea onChange={onChange} className={styles.textarea} value={value} />
    </div>

  )

Textarea.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
}

export default Textarea;