import C from '../constants'

/**In our case the goal reducer is supposed to work as a function that will take a given state and an action and produce a new state.*/
// function goal(state, action){
//     if(action.type === C.SET_GOAL) {
//         return action.payload; //where new goal can be found
//     } else {
//         return state; //original state
//     }
// }

//to import goal to index.js we need to export it from here.
/**ES6 Syntax*/
export const goal = (state=10, action) => {
    if(action.type === C.SET_GOAL) {
        return parseInt(action.payload); //where new goal can be found also make sure it is a number
    } else {
        return state; //original state
    }
}
