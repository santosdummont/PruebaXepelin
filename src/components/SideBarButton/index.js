import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import styles from './SideBarButton.module.scss';


const SideBarButton = ({
  onClick,
  text,
  isActive,
  icon,
}) => (
    <button
      className={`
          ${styles.button} 
          ${isActive && styles.active}
          `}
      onClick={onClick}>
        {icon && 
          <span className={styles.icon}><FontAwesomeIcon icon={icon} /></span>
        }
      {text}
    </button>
  )

export default SideBarButton;