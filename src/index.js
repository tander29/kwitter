import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


//need to do router work here provider/store,index to be rendered
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
