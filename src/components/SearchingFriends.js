import SearchByName from './SearchByName';
import SearchByAge from './SearchByAge';
import SearchByEmail from './SearchByEmail';

export default function SearchingFriends() {
  return `
      <div>
        ${SearchByName()}
        ${SearchByAge()}
        ${SearchByEmail()}
      </div>
    `;
}
