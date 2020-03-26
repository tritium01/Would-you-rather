import React from 'react';
import ReactDOM from 'react-dom'
import App from './Components/App'
import {createStore} from "redux";
import {Provider} from 'react-redux'
import reducer from "./Store/Reducers"
import middleware from "./Store/Middleware"


const store = createStore(reducer, middleware);

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,

    document.getElementById('root'));


