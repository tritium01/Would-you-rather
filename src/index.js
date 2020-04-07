import React from 'react';
import ReactDOM from 'react-dom'
import './index.css'
import App from './Components/App'
import {createStore} from "redux";
import {Provider} from 'react-redux'
import {toast, ToastContainer} from "react-toastify";
import reducer from "./Store/Reducers"
import middleware from "./Store/Middleware"
import {composeWithDevTools} from "redux-devtools-extension";
import './fonts/Roboto-Regular.ttf'
import './fonts/Roboto-Medium.ttf'
import 'react-toastify/dist/ReactToastify.min.css'


const store = createStore(reducer, composeWithDevTools(middleware));
toast.configure();


ReactDOM.render(
    <Provider store={store}>
    <ToastContainer/>
    <App />
    </Provider>,

    document.getElementById('root'));
