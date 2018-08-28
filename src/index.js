import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Root from './Root'
import { Provider } from 'react-redux'
import store from './Redux/Store'

const Index = () => (
    <Root store={store}/>   
)


//need to do router work here provider/store,index to be rendered
ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
