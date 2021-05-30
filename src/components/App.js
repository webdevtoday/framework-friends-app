/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';
import SearchingFriends from './SearchingFriends';
import FriendResult from './FriendResult';

export default function App() {
  return (
    <>
      <SearchingFriends />
      <FriendResult />
    </>
  );
}
