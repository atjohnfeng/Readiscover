import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    let store;
    
    if (window.currentUser) {
        const state = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        }
        store = configureStore(state);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    
    // window.store = store
    ReactDOM.render(<Root store={store} />, root);
});