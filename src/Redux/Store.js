import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './Reducers'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import {connectRouter, routerMiddleware} from 'connected-react-router'

export const history = createHistory();

const initialState = {}
const enchancers = []
const middleware = [
    thunk,
    routerMiddleware(history)
]

if(ProcessingInstruction.env.NODE_ENV === 'development'){
        const devToolsExt = window.__REDUX_DEVTOOLS_EXTENSION_


    if( typeof devToolsExt === 'function'){
        enchancers.push(devToolsExt())
    }
}
const composeEnhancers = compose(
                                applyMiddleware(...middleware),
                                ...enchancers)

const store = createStore(connectRouter(history)(reducer),initialState, composeEnhancers)



export default store;