//ADD
const addCounter = (list) => {
    console.log(typeof list)
    /**
    list.push(0); //mutates original array
    console.log(typeof list)
    return list;
     */
    
    //return list.concat([0]); //not a mutation

    //It should append a zero at the end of the passed Array.
    return [...list, 0]; //ES6     
};



//REMOVE
/**
 * PS: splice is a MUTATING method
const removeCounter = (list, index) => {
    return list
        .slice(0, index)
        .concat(list.slice(index + 1));
};
 */
//ES6
const removeCounter = (list, index) => {
    return [
        ...list.slice(0, index),
        ...list.slice(index + 1)
    ];
};



//INCREMENT
const incrementCounter = (list, index) => {
    //list[index] ++; //this is a mutatation
    return list
        .slice(0, index)
        .concat(list[index] + 1)
        .concat(list.slice(index + 1));
}


//************************* write the tests first then implement the function to make them pass. *************************//

//TEST ADD
//It should append a zero at the end of the passed Array.
const testAddCounter = () => {
    const listBefore = [];
    const listAfter = [0];

    deepFreeze(listBefore); //deep freeze will error out cause we're mutating state

    expect(
        addCounter(listBefore)
    ).toEqual(listAfter);
}
testAddCounter();
console.log('addCounter test passed');



//TEST REMOVE
const testRemoveCounter = () => {
    const listBefore = [0, 10, 20];
    const listAfter = [0, 20];

    deepFreeze(listBefore);

    expect(
        removeCounter(listBefore, 1)
    ).toEqual(listAfter);
};
testRemoveCounter();
console.log('removeCounter test passed')



//TEST INCREMENT
const testIncrementCounter = () => {
    const listBefore = [0, 10, 20];
    const listAfter = [0, 11, 20];

    deepFreeze(listBefore);

    expect(
        incrementCounter(listBefore, 1)
    ).toEqual(listAfter);

}
testIncrementCounter();
console.log('incrementCounter test passed')