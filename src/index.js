import React from 'react';
import ReactDOM from 'react-dom';
import { createStore,combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import { reducer as formReducer } from 'redux-form'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './store/reducers';
import {composeWithDevTools} from 'redux-devtools-extension';


const allReducers = combineReducers({reducer,
form:formReducer
});

let midleware = [];

const store = createStore(allReducers,composeWithDevTools(applyMiddleware(...midleware)));
const app =
(<Provider store={store}>
    <App/>
</Provider>)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
