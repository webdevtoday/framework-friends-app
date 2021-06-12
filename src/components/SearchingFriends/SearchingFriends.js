/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../../framework/element';
import SearchByName from '../SearchByName';
import SearchByAge from '../SearchByAge';
import SearchByEmail from '../SearchByEmail';
import styles from './SearchingFriends.css';
import { useEffect, useState } from '../../framework';

export default function SearchingFriends({
  currentName,
  currentAge,
  currentEmail,
  setCurrentAge,
  setCurrentEmail,
  setCurrentName,
}) {
  return (
    <>
      <div className={styles.SearchingFriends__item}>
        <SearchByName
          currentName={currentName}
          onChange={setCurrentName}
        />
      </div>
      <div className={styles.SearchingFriends__item}>
        <SearchByAge
          currentAge={currentAge}
          onChange={setCurrentAge}
        />
      </div>
      <div className={styles.SearchingFriends__item}>
        <SearchByEmail
          currentEmail={currentEmail}
          onChange={setCurrentEmail}
        />
      </div>
    </>
  );
}
