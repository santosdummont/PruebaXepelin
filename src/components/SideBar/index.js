import React from 'react';
import styles from './SideBar.module.scss';


const SideBar = ({
    children,
}) => (
        <div className={styles.sideBarContainer}>
          {children}
        </div>
    )

export default SideBar;