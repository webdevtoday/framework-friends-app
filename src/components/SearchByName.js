/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';
import { filterFriends } from '../data/userData';
import TextInput from './TextInput';
export default function SearchByName() {
  const searchedName = window.dataStore.filters.name;

  function performSearchByName(e) {
    window.dataStore.filters.name = e.target.value;
    filterFriends();
  }

  return (
    <TextInput
      type="text"
      value={searchedName}
      placeholder="Search by name..."
      onChange={performSearchByName}
    />
  );
}
