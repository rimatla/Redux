import C from './constants'
import appReducer from './store/reducers'
import { createStore } from 'redux'

/**load initial state*/

//set initialState to whatever data we have in localStorage, saved under redux-store.
const initialState = (localStorage['redux-store']) ?
    JSON.parse(localStorage['redux-store']) :
    {}; //variable exists? then parse into object otherwise set it to empty object

/**create store*/
const store = createStore(appReducer, initialState);

//expose store globally. Great for debugging, PS: Do not send it to production
window.store = store;

/**create a subscription that will save new data to the redux-store under localStorage every time an action is dispatched */
store.subscribe(() => {
    //write it to local storage
    const state = JSON.stringify(store.getState());
    localStorage['redux-store'] = state; ////now every time we dispatch an action, we're logging the action to the console, but we're also saving a value to localStorage
});

/**type on console*/
//store.getState()
//localStorage

/**erase local storage*/
//localStorage.clear()

//reload page and run store.getState() again

/**Dispatch actions to store globally directly in the console*/
//ie: store.dispatch({type: "SET_GOAL", payload: 11})


/** So using the store's subscribe method, we created a subscription that will save data every time an action is dispatched to the localStorage
 * under the key 'redux-store',
 * We also are initially loading that data from localStorage if it exists.*/