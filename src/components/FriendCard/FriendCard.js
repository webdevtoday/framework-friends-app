import React from 'react';
import styles from './FriendCard.css';
export default function FriendCard({ friend }) {
  return (
    <div className={styles.FriendCard}>
      <div className={styles.FriendCard__imgContainer}>
        <img className={styles.FriendCard__img} src={friend.picture.large} alt="Friend's foto" />
      </div>
      <div className={styles.FriendCard__text}>
        <div className={styles.FriendCard__textInner}>
          <h4>
            {friend.name.first} {friend.name.last}
          </h4>
          <div>
            {friend.dob.age} years old
          </div>
          <div>
            <a href="mailto:{friend.email}">{friend.email}</a>
          </div>
        </div>
      </div>
    </div>
  );
}
