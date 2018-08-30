import C from './constants'
//for AJAX call
import fetch from 'isomorphic-fetch'

//export the action creator function.
export function addDay(resort, date, powder=false, backcountry=false) {

	//add app logic here...

	//code addDay action creator
	return {
		type: C.ADD_DAY,
		payload: {resort,date,powder,backcountry}
	}

}

//add an action creator for removing a day.
export const removeDay = function(date) { //regular function syntax

	return {
		type: C.REMOVE_DAY,
		payload: date
	}

};

//add an action creator for setting a goal
export const setGoal = (goal) => //arrow function syntax
	({
		//return a object
		type: C.SET_GOAL,
		payload: goal
	});

//add a action creator for adding error
export const addError = (message) =>
	({
		//return new add error object
        type: C.ADD_ERROR,
        payload: message

	});

//add a action creator for clearing error
export const clearError = (index) =>
    ({
        //return new clear error object
        type: C.CLEAR_ERROR,
        payload: index
    });

//add a action creator for changing suggestions
export const changeSuggestions = (suggestions) =>
    ({
        type: C.CHANGE_SUGGESTIONS,
        payload: suggestions
    });


//add a action creator for clearing suggestions
export const clearSuggestions = () =>
    ({
        type: C.CLEAR_SUGGESTIONS
    });

//So above there are three action creators, they're all functions, they all do the same thing even though we've declared them differently.


/**********************************************                   THUNK                                   ****************************************************************
/**
 * Like other action creators, thunks are functions
 * The difference is, thunks don't return the action object directly, they return another function
 **/

//create thunk
export const randmGoals = () => (dispatch, getState) =>  { //arguments
	//here we have a higher order function,
	//inside of it we have control over when we're going to dispatch actions, we can even get information about the present state using the get state method.

	if(!getState().resortNames.fetching) { //if we're fetching resort names

        dispatch({
            type: C.FETCH_RESORT_NAMES
        });

        //call or delay the next dispatch
        setTimeout(() => {
            dispatch({
                type: C.CANCEL_FETCHING
            })

        }, 1500);
    }

    /**This thunk is going to check the existing state of the store.
	 * If we are currently fetching resort names, it will NOT dispatch any actions.
	 * If we are not fetching resort names, we will dispatch an action for fetching the resort names,
	 * Wait a second and a half, and cancel the fetching.*/
};

//Suggestion Thunk
export const suggestResortNames = (value) => (dispatch) => { //ie: value = 'hea' also we don't need getState here
    //change the state value of fetching from false to true
    dispatch({
        type: C.FETCH_RESORT_NAMES //this tells our state that we are currently in the process of fetching resort names
    });

    //isomorphic fetch library returns a promise. That means that we can wait for an asynchronous response.
    //make a request to our suggestion server
    fetch('http://localhost:3333/resorts/' + value)
        .then(response => response.json()) //what to return
        //what to receive from what it was returned
        .then(suggestions => {
            dispatch({
                type: C.CHANGE_SUGGESTIONS,
                payload: suggestions
            })
        })
        //look for errors
        .catch(error => {
            //use already and previously created error action creator
            dispatch(
                addError(error.message)
            );
            //if we receive an error do not change the state of our fetching back to false
            //dispatch a cancel fetching action just to make sure we are no longer fetching
            dispatch({
                type: C.CANCEL_FETCHING
            })
        })
};
