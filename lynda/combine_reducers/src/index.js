import C from './constants'
import appReducer from './store/reducers'
import initialState from './initialState.json'

/** because the single reducer has been exported by default, there's no need to destructure specific reducer functions.
 * Importing app reducer from the reducers file will give me that one reducer that's being combined*/

//Mutate state so it can be changed later on
let state =  initialState;

//our state should mutate from the initial state into the new state object
console.log(`
    initial state:
    ==========================================
    goal: ${state.goal}
    resorts: ${JSON.stringify(state.allSkiDays)}
    fetching: ${state.resortNames.fetching}
    suggestions: ${state.resortNames.suggestions}
`);

/************************************************************************************************
//ADD ACTIONS
*************************************************************************************************/
state = appReducer(state, {
    //what action
    type: C.SET_GOAL,
    //set goal to 2 days
    payload: 2
});

state = appReducer(state, {
    type: C.ADD_DAY,
    payload: {
        "resort": "Mount Everest",
        "date": "2013-10-27",
        "powder": false,
        "backcountry": true

    }
});

state = appReducer(state, {
    type: C.CHANGE_SUGGESTIONS,
    payload: ["Mt Venus", "Mt Pluto", "Mt Jupiter"]
});

console.log(`
    next state:
    ==========================================
    goal: ${state.goal}
    resorts: ${JSON.stringify(state.allSkiDays)}
    fetching: ${state.resortNames.fetching}
    suggestions: ${state.resortNames.suggestions}
`);
