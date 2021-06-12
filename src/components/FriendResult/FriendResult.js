/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../../framework/element';
import FriendList from '../FriendList';
import { isUserDataLoaded } from '../../data/userData';
import styles from './FriendResult.css';

export default function FriendResult({error, isLoading, friends}) {

  if (error) {
    return <div>{error}</div>;
  }
  
  if (isLoading) {
    return <div>Loading...</div>;
  }

  const content = friends.length > 0 ? <FriendList friends={friends} /> : 'Not found';
// TODO: Go on doing this module
  return (
    <div className={styles.FriendResult}>
      <h3 className={styles.FriendResult__title}>Friend list ({friends.length ? friends.length : 0}):</h3>
      {content}
    </div>
  );
}
