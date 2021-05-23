export default function SearchByName() {
  const searchedName = window.dataStore.filters.name;
  return `
          <div>
              <input
                  type="text"
                  value="${searchedName}"
                  placeholder="Search by name..."
                  onchange="window.dataStore.filters.name = this.value; filterFriends();"
              >
              ${searchedName ? `<div>Search friends with name: ${searchedName}</div>` : ''}
          </div>
      `;
}
