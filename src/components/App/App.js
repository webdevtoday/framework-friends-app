/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../../framework/element';
import { useFriends } from '../../data/customHooks';
import SearchingFriends from '../SearchingFriends';
import FriendResult from '../FriendResult/FriendResult';
import styles from './App.css';

export default function App() {
  const {
    error,
    isLoading,
    filteredFriends,
    currentAge,
    currentEmail,
    currentName,
    setCurrentAge,
    setCurrentEmail,
    setCurrentName,
  } = useFriends();
  return (
    <div className={styles.App}>
      <div className={styles.App__leftPanel}>
        <SearchingFriends
          currentAge={currentAge}
          currentEmail={currentEmail}
          currentName={currentName}
          setCurrentAge={setCurrentAge}
          setCurrentEmail={setCurrentEmail}
          setCurrentName={setCurrentName}
        />
      </div>
      <div className={styles.App__mainContent}>
        <FriendResult
          error={error}
          isLoading={isLoading}
          friends={filteredFriends}
        />
      </div>
    </div>
  );
}
