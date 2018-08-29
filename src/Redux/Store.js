import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './Reducers'
import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history'
import { ConnectedRouter,connectRouter, routerMiddleware } from 'connected-react-router'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const history = createBrowserHistory()

const middleware = [
    routerMiddleware(history),
    thunk,
]

const store = createStore(
  connectRouter(history)(reducer), // new root reducer with router state
  composeEnhancers(
    applyMiddleware(...middleware)))



export default store;