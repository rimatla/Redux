'use strict';
//**open on browser since we're using a cdn for redux **/
const counter = (state = 0, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default: 
            return state;
    }
};

//***************************************************** REDUX Store from scracth!!! **********************************************//
//The store holds the current state
const createStore  = reducer => {
    let state;
    let listeners = [];

    const getState = () => state; //returns current state value

    const dispatch = action => {
        state = reducer(state, action);
        listeners.forEach(listener => listener()); //notify listeners 
    }

    const subscribe = listener => {
        listeners.push(listener);
        return () => {
            listeners = listeners.filter(l => l !== listener); //removes from array
        }
    }

    dispatch({}); //dummy action to get the reducer to return the initial value

    return {getState, dispatch, subscribe};

}

/**
 * The store bind together the 3 principles of Redux
 * 1- Holds current app state object
 * 2- Lets you dispatch actons 
 * 3- Lets you create a reducer to update the state 
 */

 /**
 * The has 3 important methods
 * 1- getState(); // retrieves the current state of the app
 * 2- dispatch() // lets you dispatch actions to change the state of the app
 * 3- subscribe() // lets you register a callback that `Redux Store` will call anytime an action has been dispatched. So you can `update the UI` of your to reflect the `current` app state.
 */ 


//STORE 
const store = createStore(counter);

//GET STATE
console.log('default state:',store.getState()); // -> 0 ie: state = 0

//DISPATCH
store.dispatch({type: 'INCREMENT'});
console.log('increment:',store.getState()); // -> 1

const render = () => {
    document.getElementById('store').innerText = store.getState();
}

//SUBSCRIBE
store.subscribe(render);
render(); //-> see on browser. That's Awesome!

document.addEventListener('click', () => {
    store.dispatch({type: 'INCREMENT'});

    console.log(store.getState());
})
