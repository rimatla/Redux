import C from '../constants'
import { combineReducers } from 'redux'
/**Goal reducer is supposed to work as a function that will take a given state and an action and produce a new state.*/
//Goal Reducer
export const goal = (state=10, action) =>
    (action.type === C.SET_GOAL) ?
        parseInt(action.payload) : //where new goal can be found also make sure it is a number
        state; //original state


/**Reducer to manage objects.*/
//skiDay Reducer
export const skiDay = (state=null,action) =>
    (action.type === C.ADD_DAY) ?
    action.payload :
    state;

/**This time, our errors reducer should take in the present state along with the add error action, and we expect the next state to have a third error*/
//Errors Reducer
/**because our errors are managed with an array, the initial state will just be empty array if it's not provided ability to add and clear errors*/
export const errors = (state=[], action) => {
    switch (action.type) {
        case C.ADD_ERROR :
            return [
                ...state, //spread the current state into this array
                action.payload
            ];
        case C.CLEAR_ERROR :
            return state.filter((message, i) => i !== action.payload);
        default:
            return state;
    }
};

// allSkiDays Reducer
export const allSkiDays = (state=[], action) => {
    switch (action.type) {
        case C.ADD_DAY :
            const hasDay = state.some(skiDay => skiDay.date === action.payload.date); //some will tell us whether some of the items match specific criteria within our array.
            //if true, return state, if false add the new ski day to the array and return a brand new array for statement.
            return (hasDay) ?
                state :
                [
                ...state,
                    /**If you're tempted to write state.push and then push the new day into the array. You don't want to do that. And the reason is, is because that mutates that state argument */

                    //use existing reducer functionality
                skiDay(null, action)
                /**Now when we add days, using the allSkiDays reducer,
                 *  we return a new array with the current ski days and using the ski day reducer,
                 *  and we create the new ski day that will be added to that array.*/
            ];
        case C.REMOVE_DAY :
            //check the date on each day
            return state.filter(skiDay => skiDay.date !== action.payload);

        default:
            return state
    }
};

//fetch Reducers
export const fetching = (state=false, action) => {
    switch(action.type){
        //request for the server to return some resort names
        case C.FETCH_RESORT_NAMES:
            return true;

        case C.CANCEL_FETCHING:
            return false;
        //when a CHANGE_SUGGESTIONS action occurs, stop fetching
        case C.CHANGE_SUGGESTIONS:
            return false;
        //if action is still unknown, return state no matter what
        default:
           return state
    }
};


/** Create a suggestions reducer to clear the suggestions.
 * With CLEAR_SUGGESTIONS action in a state ie: Heavenly Ski Resort or Heavens Sonohara,
 * if we send the state and the CLEAR_SUGGESTIONS action to this reducer, we expect it to clear that array,
 * So we expect an empty array as the result. */
// Suggestions Reducer
export const suggestions = (state=[], action) => {
    switch(action.type) {
        case C.CLEAR_SUGGESTIONS :
            return [];
         //when a change occurs, we'll go ahead and return the action.payload, aka new suggestions.
        case C.CHANGE_SUGGESTIONS:
            return action.payload;
        default:
            return state
    }
};

/**
//single Reducer
const resortNames = combinedReducers({
    //combine fetching and suggestions
    fetching,
    suggestions

});

//equal to the output of combinedReducers
const singleReducer = combinedReducers({
    //combine reducers into an object
    allSkiDays,
    goal,
    errors,
    //since fetching and suggestions were combined into a single reducer function called resort names. Add the resort names reducer function
    resortNames
});

export default singleReducer;
 */

//or
/**now the reducers file exports by default one reducer that combines all of the functions that we created in this file*/
export default combineReducers({
    //combine reducers into an object
    allSkiDays,
    goal,
    errors,
    resortNames: combineReducers({
        //combine fetching and suggestions
        fetching,
        suggestions
    })
});







