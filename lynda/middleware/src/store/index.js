import C from '../constants'
import appReducer from './reducers'
//order to associate this middleware with our store, we're going to need to grab the applyMiddleware function from redux
import { createStore, applyMiddleware } from 'redux'

/**Middleware uses a higher order function. To create middleware, we're going to need to create a function that returns a function that returns a function.*/

// create some middleware for logging messages to the console.
/**
const consoleMessages = function(store){ //inject store
    return function(next){ //invoke and/or dispatch action
        return function(action){ //action to be dispatched

        }
    }
};
*/

// arrow function syntax
/**This function gives us the action that is currently being dispatched, along with a mechanism to dispatch that action and change the state.*/
const consoleMessages = store => next => action => {

    //record result
    let result;

    //create a console group. This allow us to group all of the logs that are associated with this action into a collapsible group on the console
    console.groupCollapsed(`dispatching action => ${action.type}`);

    //before the action is dispatched, log the length of the ski days.
    console.log('ski days', store.getState().allSkiDays.length);

    //dispatch action change state
    result = next(action);

    //after the action is dispatched, get information about the current state.
    let { allSkiDays, goal, errors, resortNames } = store.getState();

    console.log(`
		ski days: ${allSkiDays.length}
		goal: ${goal}
		fetching: ${resortNames.fetching}
		suggestions: ${resortNames.suggestions}
		errors: ${errors.length}
	`);

    //end console group
    console.groupEnd();
    return result;
};

/**This file exports a function that we can use to create stores. We encapsulate everything in this file so that we can add middleware.*/
export default (initialState={}) => {
    //this will return a createStore function.
    //It's a new createStore function that will create stores with our consoleMessages middleware
    return applyMiddleware(consoleMessages)(createStore)(appReducer, initialState);

    /**returns a store that's created with our middleware, the consoleMessages and it also applies our appReducer and any initialState that is passed to this function.
     * Now use this store inside of the index.js file.*/
}

/**
 * - The above gives us a piece of middleware. Called consoleMessages.
*  - This is a reusable function, that can added to stores across applications, if need be*/