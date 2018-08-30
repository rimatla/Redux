import C from './constants'
import { allSkiDays } from './store/reducers'

/**Reducers are pure functions that are designed to manage specific parts of your state object.*/
const state = [
    {
        "resort": "Mt Shasta",
        "date": "2016-11-11",
        "powder": false,
        "backcountry": true
    },
    {
        "resort": "Boreal",
        "date": "2016-12-12",
        "powder": true,
        "backcountry": false

    }
];

/**REMOVE DAY*/
const action = {
    type: C.REMOVE_DAY,
    //which date to remove
    payload: "2016-12-12",
};

/**ADD DAY*/
// const action = {
//     type: C.ADD_DAY,
//     payload: {
//         "resort": "Boreal",
//         "date": "2016-12-12",
//         "powder": true,
//         "backcountry": false
//
//     }
// };

/** use the reducer to get the new value.*/
const nextState = allSkiDays (state, action);
console.log(`
    initial state: ${JSON.stringify(state)}
    action: ${JSON.stringify(action)}
    new state: ${JSON.stringify(nextState)}
`);
