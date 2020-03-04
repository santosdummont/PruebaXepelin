import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import styles from './Loading.module.scss';


const Loading = () => (
  <div className={styles.container}><FontAwesomeIcon icon={faSpinner} spin /></div>
)

export default Loading;