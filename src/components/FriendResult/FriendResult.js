/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../../framework/element';
import FriendList from '../FriendList';
import { isUserDataLoaded } from '../../data/userData';
import styles from './FriendResult.css';

export default function FriendResult() {
  const { isDataLoading, error, friends } = window.dataStore;

  let content = null;

  if (isDataLoading) {
    content = 'Loading...';
  }
  if (error !== null) {
    content = error;
  }
  if (isUserDataLoaded()) {
    content = friends.length > 0 ? <FriendList friends={friends} /> : 'Not found';
  }
// TODO: Go on doing this module
  return (
    <div className={styles.FriendResult}>
      <h3 className={styles.FriendResult__title}>Friend list ({friends.length ? friends.length : 0}):</h3>
      {content}
    </div>
  );
}
