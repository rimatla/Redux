import C from '../constants'
/**Goal reducer is supposed to work as a function that will take a given state and an action and produce a new state.*/

//ES6 Syntax
//Goal Reducer
export const goal = (state=10, action) => {
    if(action.type === C.SET_GOAL) {
        return parseInt(action.payload); //where new goal can be found also make sure it is a number
    } else {
        return state; //original state
    }
};

/** This time we're going to build a reducer to manage objects.*/
//skiDay Reducer
export const skiDay = (state=null,action) => {
    if(action.type === C.ADD_DAY) {
        return action.payload;
    } else {
        return state; //original state
    }
};





