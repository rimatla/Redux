//toggleTodo takes a todo Object and flips its "completed" field.
//So if completed was false it should be true in the returned value or 
//if it was true it should be false

const toggleTodo = (todo) => {
    //todo.completed = !todo.completed; //mutating 
    //return todo;

    //One way out of this would be to create a new object with every field copied from the original object except the completed field which would be flipped:
    // return {
    //     id: todo.id,
    //     text: todo.text,
    //     completed: !todo.completed
    // }

    //However if we later add new properties to the todo object, we might forget to update this piece of code to include them.

    //ps: if enabled on babel as stage-2 preset
    /*
    return {
        ...todo,
          completed: !todo.completed
    }
    */
    return Object.assign({}, todo, {
        completed: !todo.completed
    });
};

const testToggleTodo = () => {
    const todoBefore = {
        id: 0,
        text: 'Learn Redux',
        completed: false
    }
    const todoAfter = {
        id: 0,
        text: 'Learn Redux',
        completed: true
    }

    deepFreeze(todoBefore);

    expect(
        toggleTodo(todoBefore)
    ).toEqual(todoAfter);
}

testToggleTodo(); // run the test
console.log('passed')