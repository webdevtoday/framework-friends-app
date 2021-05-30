/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';
import { filterFriends } from '../data/userData';
import TextInput from './TextInput';
export default function SearchByAge() {
  const searchedAge = window.dataStore.filters.age;
  function performSearchByAge(e) {
    window.dataStore.filters.age = e.target.value;
    filterFriends();
  }
  return (
    <TextInput
      value={searchedAge}
      placeholder="Search by age..."
      onChange={performSearchByAge}
    />
  );
}
