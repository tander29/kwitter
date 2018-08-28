import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import store from './Redux/Store'
import {ConnectedRouter}   from 'connected-react-router'
import history from './Redux/Store'



//need to do router work here provider/store,index to be rendered
ReactDOM.render(  
    <Provider store={store}>
    <ConnectedRouter history={history}>
    <p>s</p>
    </ConnectedRouter> 
    </Provider>,
     document.getElementById('root'));
registerServiceWorker();
