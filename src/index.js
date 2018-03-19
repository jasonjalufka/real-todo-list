import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import rootReducer from './store/reducers/index';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();
const store = createStore(rootReducer, persistedState);

// subscribe adds change listener to be called any time an action is dispatched
// the listener is invoked on any state change, passing in the current state of the store into saveState()
store.subscribe(() => {
  saveState({
    tasks: store.getState().tasks
  });
});

ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
