import React from 'react';
import styles from './Section.module.scss';


const Section = ({
    title,
    children,
}) => (
        <div className={styles.sectionContainer}>
          {title && 
            <div className={styles.title}>
              {title}
          </div>
          }
          {children}
        </div>
    )

export default Section;