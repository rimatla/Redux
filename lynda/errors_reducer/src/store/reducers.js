import C from '../constants'

/**Goal reducer is supposed to work as a function that will take a given state and an action and produce a new state.*/
//Goal Reducer
export const goal = (state=10, action) =>
    (action.type === C.SET_GOAL) ?
        parseInt(action.payload) : //where new goal can be found also make sure it is a number
        state; //original state


/** This time we're going to build a reducer to manage objects.*/
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
        /**
         * The filter method constructs and returns a new array.
         * It leaves our current array intact, so it keeps our current state immutable.
         * The filter method expects a callback function, and this callback function will pass the error message in the current index to it so that we can check each of the messages
         * This callback function will be invoked once for every message in the array.
         * We call this function a predicate because it expects a true or false.
         * If this function returns a true, then this message will be added to the new array.
         * If it returns a false, then we will filter this message out, not adding it to the new array.
         * When i is equal to our action.payload, that value will be filtered out of the array.
         * */
        default:
            return state;
    }
};




