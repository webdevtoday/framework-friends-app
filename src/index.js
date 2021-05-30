import dataStore from './data/dataStore';
import renderApp from './framework/render';
import App from './components/App';
import { performLoadingData } from './data/userData';

if (module.hot) {
  module.hot.accept();
}

window.dataStore = dataStore;

renderApp(App, document.getElementById('app-root'));
performLoadingData();
