import React from 'react';
import styles from './PostDetail.module.scss';


const PostDetail = ({
  id,
  userId,
  title,
  body,
  onClick,
}) => (
    <div className={styles.postContainer} onClick={onClick}>
      {id && userId &&
        <div className={styles.infoBar}>
          <span>User id: {userId}</span>
          <span>Post id: {id}</span>
        </div>
      }
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

export default PostDetail;