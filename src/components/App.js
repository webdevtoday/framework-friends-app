import SearchingFriends from './SearchingFriends';
import FriendResult from './FriendResult';

export default function App() {
  return `
        <div>
          ${SearchingFriends()}
          ${FriendResult()}
        </div>
      `;
}
