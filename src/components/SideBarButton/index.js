import React from 'react';
import styles from './SideBarButton.module.scss';


const SideBarButton = ({
  onClick,
  text,
  active,
}) => (
    <button
      className={`
          ${styles.button} 
          ${active && styles.active}
          `}
      onClick={onClick}>
      {text}
    </button>
  )

export default SideBarButton;