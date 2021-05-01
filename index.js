import { getRandomUserUrl } from './utils';

window.dataStore = {
  friendStore: null,
  friends: {},
  error: null,
  isDataLoading: true,
  filters: {
    name: '',
    age: '',
    email: '',
  },
};
window.renderApp = renderApp;
window.filterFriends = filterFriends;
window.loadData = loadData;

renderApp();
performLoadingData();

function renderApp() {
  document.getElementById('app-root').innerHTML = App();
}

function getUserData() {
  return window.dataStore.friendStore;
}

function isUserDataLoaded() {
  return Boolean(getUserData());
}

function loadData() {
  const url = getRandomUserUrl();
  if (!isUserDataLoaded()) {
    return fetch(url)
      .then(response => response.json())
      .then(data => ({ data }));
  }

  return Promise.resolve({});
}

function performLoadingData() {
  window.dataStore.error = null;
  window.dataStore.isDataLoading = true;
  window
    .loadData()
    .then(({ error, data }) => {
      window.dataStore.isDataLoading = false;
      if (error) {
        window.dataStore.error = error;
      } else if (data) {
        window.dataStore.friendStore = data.results;
        window.dataStore.friends = data.results;
      }
    })
    .catch(() => {
      window.dataStore.error = 'Some error occurred.';
    })
    .finally(window.renderApp);
}

function App() {
  return `
        ${SearchingFriends()}
        ${FriendResult()}
    `;
}

function FriendResult() {
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

function SearchingFriends() {
  return `
    <div>
      ${SearchByName()}
      ${SearchByAge()}
      ${SearchByEmail()}
    </div>
  `;
}

function FriendList() {
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
        <h3>Friend list (${friends.length ? friends.length : 0}):</h3>
        ${list}
    `;
}

function FriendCard(friend) {
  return `
        <div>
            <h4>${friend.name.first} ${friend.name.last}</h4>
            <div>Age: ${friend.dob.age} years old</div>
            <div>Email: <a href="mailto:${friend.email}">${friend.email}</a></div>
            <div><img src="${friend.picture.large}" alt="Friend's foto"></div>
        </div>
    `;
}

function filterFriends() {
  let friends = window.dataStore.friendStore;
  const searchedName = window.dataStore.filters.name;
  const searchedAge = window.dataStore.filters.age;
  const searchedEmail = window.dataStore.filters.email;

  if (searchedName) {
    friends = friends.filter(friend => {
      return `${friend.name.first} ${friend.name.last}`
        .toLowerCase()
        .includes(searchedName.toLowerCase());
    });
  }

  if (searchedAge) {
    friends = friends.filter(friend => {
      return +friend.dob.age === +searchedAge;
    });
  }

  if (searchedEmail) {
    friends = friends.filter(friend => {
      return `${friend.email}`.toLowerCase().includes(searchedEmail.toLowerCase());
    });
  }

  window.dataStore.friends = friends;
  renderApp();
}

function SearchByName() {
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

function SearchByAge() {
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

function SearchByEmail() {
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
