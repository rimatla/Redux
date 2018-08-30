import {combineReducers} from 'redux';
const rootReducer = combineReducers({
    getUsers: (state= [], action) => action.payload || state
});
export default rootReducer;