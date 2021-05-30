/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../../framework/element';
import SearchingFriends from '../SearchingFriends';
import FriendResult from '../FriendResult/FriendResult';
import styles from './App.css';

export default function App() {
  return (
    <div className={styles.App}>
      <div className={styles.App__leftPanel}>
        <SearchingFriends />
      </div>
      <div className={styles.App__mainContent}>
        <FriendResult />
      </div>
    </div>
  );
}
