import C from './constants'
import storeFactory from './store'

const initialState = (localStorage['redux-store']) ?
    JSON.parse(localStorage['redux-store']) :
    {};

//save state to localStorage
const saveState = () => {
    const state = JSON.stringify(store.getState());
    localStorage['redux-store'] = state
};

//create new store
const store = storeFactory(initialState);

//a store that will load its initialState from localStorage, and every time we dispatch an action, it will save that state.
store.subscribe(saveState);

store.dispatch({
    type: C.ADD_DAY,
    payload: {
        "resort": "Mt Shasta",
        "date": "2016-10-28",
        "powder": true,
        "backcountry": true
    }
});

store.dispatch({
    type: C.ADD_DAY,
    payload: {
        "resort": "Squaw Valley",
        "date": "2016-3-28",
        "powder": true,
        "backcountry": false
    }
});

store.dispatch({
    type: C.ADD_DAY,
    payload: {
        "resort": "Xen Xu Tian",
        "date": "2016-5-18",
        "powder": true,
        "backcountry": false
    }
});

// now, every action that our store dispatches will log that information in a console group thanks to our middleware.