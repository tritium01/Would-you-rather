import React from 'react';
import ReactDOM from 'react-dom'
import './index.css'
import App from './Components/App'
import {createStore} from "redux";
import {Provider} from 'react-redux'
import {ToastProvider} from 'react-toast-notifications'
import reducer from "./Store/Reducers"
import middleware from "./Store/Middleware"
import {composeWithDevTools} from "redux-devtools-extension";
import './fonts/Roboto-Regular.ttf'
import './fonts/Roboto-Medium.ttf'


const store = createStore(reducer, composeWithDevTools(middleware));

ReactDOM.render(
    <Provider store={store}>
    <ToastProvider>
    <App />
    </ToastProvider>
    </Provider>,

    document.getElementById('root'));
