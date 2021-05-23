export default function SearchByAge() {
  const searchedAge = window.dataStore.filters.age;
  return `
          <div>
              <input
                  type="text"
                  value="${searchedAge}"
                  placeholder="Search by age..."
                  onchange="window.dataStore.filters.age = this.value; filterFriends();"
              >
              ${searchedAge ? `<div>Search friends with age: ${searchedAge}</div>` : ''}
          </div>
      `;
}
