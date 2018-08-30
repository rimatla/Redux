import C from './constants'
import { errors } from './store/reducers'

/**Reducers are pure functions that are designed to manage specific parts of your state object.*/
const state = [
    "user not authorized",
    "server feed not found"
];

/** actions are at minimum objects with a type field.*/
//This action describes a state mutation.
// const action = {
//     type: C.ADD_ERROR,
//     payload: "cannot connect to server"
// };

/**clear error*/
const action = {
    type: C.CLEAR_ERROR,
    payload: 0
};

/** use the reducer to get the new value.*/
const nextState = errors (state, action);
console.log(`
    initial state: ${state}
    action: ${JSON.stringify(action)}
    new state: ${JSON.stringify(nextState)}
`);
