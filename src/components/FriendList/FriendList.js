/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../../framework/element';
import FriendCard from '../FriendCard';
import styles from './FriendList.css';

export default function FriendList({ friends }) {
  return (
    <ol className={styles.FriendList}>
      {friends.map(friend => (
        <li className={styles.FriendList__item}>
          <FriendCard friend={friend} />
        </li>
      ))}
    </ol>
  );
}
