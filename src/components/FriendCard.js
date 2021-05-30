/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';
export default function FriendCard({ friend }) {
  return (
    <div>
      <h4>
        {friend.name.first} {friend.name.last}
      </h4>
      <div>Age: {friend.dob.age} years old</div>
      <div>
        Email: <a href="mailto:{friend.email}">{friend.email}</a>
      </div>
      <div>
        <img src={friend.picture.large} alt="Friend's foto" />
      </div>
    </div>
  );
}
