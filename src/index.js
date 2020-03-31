import React from 'react';
import ReactDOM from 'react-dom'
import './index.css'
import App from './Components/App'
import {createStore} from "redux";
import {Provider} from 'react-redux'
import reducer from "./Store/Reducers"
import middleware from "./Store/Middleware"
import {composeWithDevTools} from "redux-devtools-extension";


const store = createStore(reducer, composeWithDevTools(middleware));

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,

    document.getElementById('root'));
