//PS: Use http-server to see changes in the browser

//Redux 
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

//component
const Counter = ({value, onIncrement, onDecrement}) => (//console.log(value),
    <div>
        <h1>{value}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
    </div>
  
);

//Store
const { createStore } = Redux; 
const store = createStore(counter);

//App component
const render = () => {
    ReactDOM.render(
        <Counter
            value={store.getState()} //prop
            onIncrement = {()=> {
                store.dispatch({
                    type: 'INCREMENT'
                })
            }}
            onDecrement={() => {
                store.dispatch({
                    type: 'DECREMENT'
                })
            }}
        />,
        document.getElementById('root')
    );
}

//SUBSCRIBE
store.subscribe(render);
render(); //-> see on browser. That's Awesome!

