export function getRandomUserUrl() {
  return `https://randomuser.me/api/?inc=gender,name,location,email,registered,dob,picture,phone&noinfo=&results=100&seed=msfa`;
}

const dataStore = {};

export function loadRandomUserData() {
  const users = dataStore.users;

  if (users) return users;

  const url = getRandomUserUrl();

  return fetch(url).then(response => {
    const result = response.json();
    dataStore.users = result;
    return result;
  });
}