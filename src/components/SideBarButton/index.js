import React from 'react';
import styles from './SideBarButton.module.scss';


const SideBarButton = ({
  onClick,
  text,
  isActive,
}) => (
    <button
      className={`
          ${styles.button} 
          ${isActive && styles.active}
          `}
      onClick={onClick}>
      {text}
    </button>
  )

export default SideBarButton;