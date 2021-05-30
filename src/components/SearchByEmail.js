/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';
import { filterFriends } from '../data/userData';
export default function SearchByEmail() {
  const searchedEmail = window.dataStore.filters.email;

  function performSearchByEmail(email) {
    window.dataStore.filters.email = email;
    filterFriends();
  }
  return (
    <div>
      <input
        type="text"
        value={searchedEmail}
        placeholder="Search by email..."
        onChange={e => performSearchByEmail(e.target.value)}
      />
      {searchedEmail ? <div>Search friends with email: {searchedEmail}</div> : <></>}
    </div>
  );
}
