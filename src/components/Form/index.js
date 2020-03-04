import React from 'react';
import styles from './Form.module.scss';


const Form = ({
  children,
}) => (
    <div
      className={`${styles.container}`}
    >
      {children}
    </div>
  )

export default Form;