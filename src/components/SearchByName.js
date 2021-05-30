/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';
import { filterFriends } from '../data/userData';
export default function SearchByName() {
  const searchedName = window.dataStore.filters.name;

  function performSearchByName(name) {
    window.dataStore.filters.name = name;
    filterFriends();
  }

  return (
    <div>
      <input
        type="text"
        value={searchedName}
        placeholder="Search by name..."
        onchange={e => performSearchByName(e.target.value)}
      />
      {searchedName ? <div>Search friends with name: {searchedName}</div> : <></>}
    </div>
  );
}
