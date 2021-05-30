/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';
import { filterFriends } from '../data/userData';
export default function SearchByAge() {
  const searchedAge = window.dataStore.filters.age;
  function performSearchByAge(age) {
    window.dataStore.filters.age = age;
    filterFriends();
  }
  return (
    <div>
      <input
        type="text"
        value={searchedAge}
        placeholder="Search by age..."
        onChange={e => performSearchByAge(e.target.value)}
      />
      {searchedAge ? <div>Search friends with age: {searchedAge}</div> : <></>}
    </div>
  );
}
