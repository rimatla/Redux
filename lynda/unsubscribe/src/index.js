/**
 * We've learned that the store has a subscribe method that allows you to add callback handlers that are invoked every time state is changed.
 * Now, we'll learn that we also have an unsubscribe method so that we can TURN OFF store subscriptions.*/

import C from './constants'
import appReducer from './store/reducers'
import { createStore } from 'redux'

const store = createStore(appReducer);

/**every time we call store.subscribe, it returns a function that can be used to unsubscribe that particular method*/

//log a goal
const unsubscribeGoalLogger = store.subscribe(
    () => console.log(`   Goal: ${store.getState().goal}`)
);

/**log a goal once ever x seconds*/
//setInterval() executes repeatedly
setInterval(() => {

    store.dispatch({
        type: C.SET_GOAL,
        //randomly calculate the payload:
        //Get a decimal between zero and one, use that as a percentage and multiply it by 100, so you'll get a random decimal out of 100
        payload: Math.floor(Math.random() * 100)
    })

}, 250);

/**Now how to turn it off?
 * After 3 seconds, kill it, return the unsubscribeGoalLogger to turn off the subscription.*/

//setTimeout() is only executed once and stops.
setTimeout(() => {

    unsubscribeGoalLogger();

}, 3000);
