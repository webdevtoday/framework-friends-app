/** @jsx createElement */
/** @jsxFrag createFragment */
import { createElement, createFragment } from '../framework/element';
import { filterFriends } from '../data/userData';
import TextInput from './TextInput';
export default function SearchByEmail() {
  const searchedEmail = window.dataStore.filters.email;

  function performSearchByEmail(e) {
    window.dataStore.filters.email = e.target.value;
    filterFriends();
  }
  return (
    <TextInput
      type="text"
      value={searchedEmail}
      placeholder="Search by email..."
      onChange={performSearchByEmail}
    />
  );
}
