import React from 'react';
import FriendList from '../FriendList';
import styles from './FriendResult.css';

export default function FriendResult({error, isLoading}) {
  if (error) {
    return <div>{error}</div>;
  }
  
  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  return (
    <div className={styles.FriendResult}>
      <h3 className={styles.FriendResult__title}>Friend list:</h3>
      <FriendList />
    </div>
  );
}
