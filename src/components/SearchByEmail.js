export default function SearchByEmail() {
  const searchedEmail = window.dataStore.filters.email;
  return `
          <div>
              <input
                  type="text"
                  value="${searchedEmail}"
                  placeholder="Search by email..."
                  onchange="window.dataStore.filters.email = this.value; filterFriends();"
              >
              ${searchedEmail ? `<div>Search friends with email: ${searchedEmail}</div>` : ''}
          </div>
      `;
}
