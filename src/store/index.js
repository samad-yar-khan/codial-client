//instead of using our store in index.js we make a sepearte folder and file for store wehere we make a func which creates and returns our store
import {createStore , applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import reducer from '../reducers/index'

let store;



export function configureStore (){

    store = createStore(reducer,applyMiddleware(thunk,logger))
    return store;
}