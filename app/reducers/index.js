/**
 * Created by garima.kaila on 2017-04-14.
 */

import {combineReducers} from 'redux';

// Reducers
import movieReducer from './movie-reducer';

// Combine Reducers
var reducers = combineReducers({
    movies: movieReducer
});

export default reducers;
