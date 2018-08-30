import axios from 'axios';

export function fetchUsers() {
    const request = axios.get('https://jsonplaceholder.typicode.com/users');
    console.log(request);
    //Redux thunk enables an additional return type: (a plain JS function)
    return (dispatch) => { //passing an action into dispatch, will then be sent off to all of reducers
        //wait for request to resolve
        request.then(({data}) => {
            //once resolved, dispatch an action
            dispatch({
                type: 'FETCH_PROFILES',
                payload: data
            })
        })
    }
}