import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from "react-redux";
import store from "./store/index";
import { BrowserRouter } from 'react-router-dom'
import './site.css';
import '../node_modules/toastr/build/toastr.min.css'
import "react-datepicker/dist/react-datepicker.css"
import 'react-confirm-alert/src/react-confirm-alert.css'
import "@kenshooui/react-multi-select/dist/style.css"

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);