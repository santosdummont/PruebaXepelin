import React from 'react';
import styles from './Post.module.scss';


const Section = ({
  title,
  body,
  onClick,
}) => (
    <div className={styles.postContainer} onClick={onClick}>
      {title &&
        <div className={styles.title}>
          <span>{title}</span>
        </div>
      }
      {body &&
        <div className={styles.body}>{body}</div>
      }
    </div>
  )

export default Section;