// More information: https://dev.to/waqasabbasi/server-side-rendered-app-with-next-js-react-and-redux-38gf
import { combineReducers } from 'redux';
import { createStore } from 'redux';

export const SIGNIN = 'SIGNIN'

export const signin = (payload) => ({
  type: SIGNIN,
  payload
})

const DEFAULT_STATE = { flightNumber: null, lastName: null }

const passengerReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SIGNIN:
      return {
        ...state,
        flightNumber: action.payload.flightNumber,
        lastName: action.payload.lastName
      }
    default:
      return {...state}
  }
}

const rootReducer = combineReducers({
  passenger: passengerReducer
})

const store = createStore(
  rootReducer
)

export default store;
