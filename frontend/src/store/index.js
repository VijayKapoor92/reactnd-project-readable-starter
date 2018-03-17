import { createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import {categories, posts, comments, sort} from '../reducers';

export default createStore(
    combineReducers({categories, posts, comments, sort}),
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);