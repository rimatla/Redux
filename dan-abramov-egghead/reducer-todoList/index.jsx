//reducer for a Todo-list application who's state is described as an array of Todos.
//reducer is: its a "pure function" you write to implement the update logic of your application. 
//That is how the next state is calculated given the current state and the action being dispatched.
const todos = (state = [], action) => {
    switch (action.type) {
        // return a new Array which includes all the items from the original Array but also a new Todo item
        case 'ADD_TODO':
        return [
            ...state,
            {
                id: action.id,
                text: action.text,
                completed: false
            }
        ];
        case 'TOGGLE_TODO':
            return state.map(todo => {
                if (todo.id !== action.id) { //if not
                    return todo;
                }
                return { //if yes
                    ...todo,
                    completed: !todo.completed
                };
            });
        default:
            return state; //every reducer has to return the current state for any unknown action
    }
};

const testAddTodo = () => {
    const stateBefore = [];
    const action = {
        type: 'ADD_TODO',
        id: 0,
        text: 'Learn Redux'
    }
    const stateAfter = [
        {
            id: 0,
            text: 'Learn Redux',
            completed: false
        }
    ];

    deepFreeze(stateBefore);
    deepFreeze(stateAfter);

    expect(
        todos(stateBefore, action)
  ).toEqual(stateAfter);
};

//TOGGLE TOOD
const testToggleTodo = () => {
    const stateBefore = [
        {
            id: 0,
            text: 'Learn Redux',
            completed: false
        },
        {
            id: 1,
            text: 'Go shopping',
            completed: false
        }
    ];
    const action = {
        type: 'TOGGLE_TODO',
        id: 1
    };
    const stateAfter = [
        {
            id: 0,
            text: 'Learn Redux',
            completed: false
        },
        {
            id: 1,
            text: 'Go shopping',
            completed: true
        }
    ];

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
        todos(stateBefore, action)
    ).toEqual(stateAfter);
}

testToggleTodo();
testAddTodo();
console.log('All tests passed :).');