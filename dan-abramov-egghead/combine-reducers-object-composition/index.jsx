const todo = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false
            }
        case 'TOGGLE_TODO':
            if (state.id !== action.id) {
                return state;
            }
            return Object.assign({}, state, { // see: http://git.io/vuBzV
                completed: !state.completed     // here state is the individual todo
            });
        default:
            return state;
    }
}

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
            ];
        case 'TOGGLE_TODO':
            return state.map(t => todo(t, action));
        default:
            return state;
    }
};


//we want to let the user choose which todos are currently visible with a visibilityFilter such as SHOW_COMPLETED, SHOW_ALL or SHOW_ACTIVE.
const visibilityFilter = (
    state = 'SHOW_ALL', // default state
    action
) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state;
    }
};

//The only argument to combineReducers is an Object and this Object let us specify the mapping between the state field names and the reducers managing them:
const { combineReducers } = Redux;
const todoApp = combineReducers({
    //todos: todos,
    todos, // ES6 Object Literal Shorthand Notation:
    //visibilityFilter: visibilityFilter
    visibilityFilter
});
//The returned value of the combineReducers call is a reducer function which is pretty much equivalent to the reducer function I wrote by hand previously


//The state of the visibilityFilter is a simple String representing the current filter and it is changed by the SET_VISIBILITY_FILTER action.

// const todoApp = (state = {}, action) => {
//     return {
//         todos: todos(
//             state.todos,
//             action
//         ),
//         visibilityFilter: visibilityFilter(
//             state.visibilityFilter,
//             action
//         )
//     };
// };

const { createStore } = Redux;
const store = createStore(todoApp);

console.log('Dispatching SET_VISIBILITY_FILTER');
store.dispatch({
    type: 'SET_VISIBILITY_FILTER',
    filter: 'SHOW_COMPLETED'
});

console.log('Current state:');
console.log(store.getState());
console.log('--------------');