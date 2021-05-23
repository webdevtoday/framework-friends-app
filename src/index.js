import dataStore from './data/dataStore';
import { loadData, filterFriends, performLoadingData } from './data/userData';
import renderApp from './framework/render';
import App from './components/App';

window.dataStore = dataStore;

window.renderApp = renderApp;
window.filterFriends = filterFriends;
window.loadData = loadData;

renderApp(App, 'app-root');
performLoadingData();
