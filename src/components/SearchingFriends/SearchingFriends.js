/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../../framework/element';
import SearchByName from '../SearchByName';
import SearchByAge from '../SearchByAge';
import SearchByEmail from '../SearchByEmail';
import styles from './SearchingFriends.css';

export default function SearchingFriends() {
  return (
    <>
      <div className={styles.SearchingFriends__item}>
        <SearchByName />
      </div>
      <div className={styles.SearchingFriends__item}>
        <SearchByAge />
      </div>
      <div className={styles.SearchingFriends__item}>
        <SearchByEmail />
      </div>
    </>
  );
}
