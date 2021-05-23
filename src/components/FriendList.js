import FriendCard from './FriendCard';

export default function FriendList() {
  const friends = window.dataStore.friends;
  const openListTag = '<ol>';
  const closeListTag = '</ol>';
  let list = '';
  if (friends.length > 0) {
    list += openListTag;
    list += friends
      .map(friend => {
        return `<li>${FriendCard(friend)}</li>`;
      })
      .join('');
    list += closeListTag;
  } else {
    list = 'Not found';
  }
  return `
        <div>
          <h3>Friend list (${friends.length ? friends.length : 0}):</h3>
          ${list}
        </div>
      `;
}
