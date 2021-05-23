import FriendList from './FriendList';
import { isUserDataLoaded } from '../data/userData';

export default function FriendResult() {
  const { isDataLoading, error } = window.dataStore;
  let content = '';
  if (isDataLoading) {
    content = 'Loading...';
  }

  if (error !== null) {
    content = error;
  }

  if (isUserDataLoaded()) {
    content = `${FriendList()}`;
  }

  return `
      <div>${content}</div>
    `;
}
