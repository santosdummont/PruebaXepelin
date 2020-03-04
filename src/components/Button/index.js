import React from 'react';
import styles from './Button.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';


const Button = ({
  onClick,
  children,
  active,
  loading,
  disabled,
}) => (
    <button
      className={`
            ${styles.button} 
            ${active && styles.active}
            `}
      onClick={onClick}
      disabled={disabled}
    >
      {loading ? <FontAwesomeIcon icon={faSpinner} spin /> : children}
    </button>
  )

export default Button;