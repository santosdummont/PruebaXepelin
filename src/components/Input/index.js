import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';


const Input = ({
  label,
  onChange,
  value,
}) => (
    <div className={styles.container}>
      {label &&
        <div className={styles.label}>{label}</div>
      }
      <input onChange={onChange} className={styles.input} value={value} />
    </div>

  )

Input.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
}

export default Input;