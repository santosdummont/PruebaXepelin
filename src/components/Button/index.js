import React from 'react';
import styles from './Button.module.scss';


const Button = ({
    onClick,
    children,
    active,
}) => (
        <button className={`${styles.button} ${active && styles.active}`} onClick={onClick}>
          {children}
        </button>
    )

export default Button;