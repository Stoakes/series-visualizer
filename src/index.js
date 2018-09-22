import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import appReducer from './config/reducer';
import App from './containers/AppContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

const reducer = combineReducers({
    app: appReducer,
    form: formReducer,
});

const store = (window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore)(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
