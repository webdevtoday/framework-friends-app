import { getRandomUserUrl } from './randomUserAPI';
import renderApp from '../framework/render';

export function loadData() {
  const url = getRandomUserUrl();
  if (!isUserDataLoaded()) {
    return fetch(url)
      .then(response => response.json())
      .then(data => ({ data }));
  }

  return Promise.resolve({});
}

export function performLoadingData() {
  window.dataStore.error = null;
  window.dataStore.isDataLoading = true;
  renderApp();
  loadData()
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
    .finally(renderApp);
}

export function filterFriends() {
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

export function getUserData() {
  return window.dataStore.friendStore;
}

export function isUserDataLoaded() {
  return Boolean(getUserData());
}
