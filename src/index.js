import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Components/Home';
import Main from './Components/Main'
import NoPagePath from './Components/NoPagePath'
import Profile from './Components/Profile'
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import store, { history } from './Redux/Store'
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router'






//need to do router work here provider/store,index to be rendered
ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path="/" render={(props) => (<Home location={props.location.pathname} />)} />
                <Route exact path="/Main" render={(props) => (<Main location={props.location.pathname} />)} />
                <Route component={NoPagePath} />
            </Switch>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
