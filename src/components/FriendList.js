/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';
import FriendCard from './FriendCard';

export default function FriendList() {
  const friends = window.dataStore.friends;
  let list = <></>;
  if (friends.length > 0) {
    list = (
      <ol>
        {friends.map(friend => (
          <li>
            <FriendCard friend={friend} />
          </li>
        ))}
      </ol>
    );
  } else {
    list = <>Not found</>;
  }
  return (
    <div>
      <h3>Friend list ({friends.length ? friends.length : 0}):</h3>
      {list}
    </div>
  );
}
