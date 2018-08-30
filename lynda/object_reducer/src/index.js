import C from './constants'
import { skiDay } from './store/reducers'

/**Reducers are pure functions that are designed to manage specific parts of your state object.*/
const state = null;

/** actions are at minimum objects with a type field.*/
// This action describes a state mutation.
const action = {
    type: C.ADD_DAY,
    payload: {
        "resort": "Heavenly",
        "date": "2016-12-16",
        "powder": true,
        "backcountry": false
    }
};

/** use the reducer to get the new value.*/
const nextState = skiDay(state, action);
console.log(`
    initial state: ${state}
    action: ${JSON.stringify(action)}
    new state: ${JSON.stringify(nextState)}
`);
