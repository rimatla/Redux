//import C from './constants' (this now will imported of the action creation files)
import expect from 'expect'
import storeFactory from './store'
import { addDay, removeDay, setGoal, addError, clearError, changeSuggestions, clearSuggestions, randmGoals, suggestResortNames } from './actions'

const store = storeFactory();

/**
 * - Instead of sending an object to the dispatch function, invoke the action creator inside of it.
 * - So store.dispatch and we're going to dispatch a new addDay action using the function.
 * - Now the action creator makes it a little easier since it will take in the arguments required to add a ski day*/

//import addDay action creator function.
store.dispatch(
    addDay("Heavenly", "2016-12-22")
);

//import removeDay action creator function.
store.dispatch(
    removeDay("2016-12-22")
);

//import setGoal action creator function.
store.dispatch(
    setGoal(55)
);

//import addError action creator function.
store.dispatch(
    addError("Something went south buddy")
);

//expect
expect(store.getState().errors).toEqual(["Something went south buddy"]);
console.log(`
    addError() Action Creator Works!!!!
`);

//import clearError action creator function.
store.dispatch(
    clearError(0)
);

//expect
expect(store.getState().errors).toEqual([]);
console.log(`
    clearError() ALSO Action Creator Works!!!!
`);

//import change suggestions action creator function.
store.dispatch(
    changeSuggestions(['One', 'Two', 'Three'])
);

expect(store.getState().resortNames.suggestions).toEqual(['One', 'Two', 'Three']);

console.log(`

    Holly Molly changeSuggestions() Action Creator Works!!!

`);

//import clear suggestions action creator function.

store.dispatch(clearSuggestions());

expect(store.getState().resortNames.suggestions).toEqual([]); //expect to equal as an empty array

console.log(`

    You're not gonna believe this but clearSuggestions() Action Creator Works!!!

`);

/********************************              THUNK      ******************************************/
//randmGoals THUNK action creator
store.dispatch(randmGoals());

//Suggestions THUNK action creator
store.dispatch(suggestResortNames("vil")); //need a value to make a suggestion ie: 'vil'



