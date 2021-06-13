import React from 'react';
import { useAppContext } from '../../context';
import FriendCard from '../FriendCard';
import styles from './FriendList.css';

export default function FriendList() {
  const friends = useAppContext();
  if (!friends) return null;
  return (
    <ol className={styles.FriendList}>
      {friends.map(friend => {
        const uKey = `${friend.phone.replace(/\D/g, '')}`;
        return (
          <li key={uKey} className={styles.FriendList__item}>
            <FriendCard friend={friend} />
          </li>
        );
      })}
    </ol>
  );
}
