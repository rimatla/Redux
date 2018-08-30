import C from '../constants'
import expect from 'expect'
import { fetching } from '../store/reducers'

const action = {
    type: C.CANCEL_FETCHING
}

const state = true
const expectedState = false

const actualState = fetching(state, action)

//if we send a CANCEL_FETCHING action to the fetching reducer, we expect it to return a false, meaning that we're not fetching.
expect(actualState).toEqual(expectedState)

console.log(`

    Challenge B: CANCEL_FETCHING PASSED!!!


`)