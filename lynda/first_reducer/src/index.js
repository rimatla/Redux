import C from './constants'
import { goal } from './store/reducers'

/**Reducers are pure functions that are designed to manage specific parts of your state object.*/
const state = 10;

/** actions are at minimum objects with a type field.*/
// This action describes a state mutation, where we change the goal from whatever its current value is to 15
const action = {
    type: C.SET_GOAL,
    payload: 15
};

/** use the reducer to get the new value.*/
const nextState = goal(state, action);
console.log(`
    initial goal: ${state}
    action: ${JSON.stringify(action)}
    new goal: ${nextState}
`);

//ES6 String Template
// console.log(`
//
//    Ski Day Counter
//    ================
//    The goal is ${goal} days
//    Initially there are ${allSkiDays.length} ski days in state
//
//    Print Constants (actions)
//    -------------------
//    ${Object.keys(C).join('\n     ')}
//
// `);

//Object.keys returns an array of all of the keys in a certain file

