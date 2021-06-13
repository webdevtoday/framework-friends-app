import React from 'react';
import { useFriends } from '../../customHooks';
import { AppContext } from '../../context';
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
        <AppContext.Provider value={filteredFriends}>
          <FriendResult
            error={error}
            isLoading={isLoading}
          />
        </AppContext.Provider>
      </div>
    </div>
  );
}
