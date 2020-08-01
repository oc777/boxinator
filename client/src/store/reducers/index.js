import { combineReducers } from 'redux'
import dispatchReducer from './dispatchReducers'
import countryReducer from './countryReducers'
import boxReducer from './boxReducers'

export default combineReducers({
  dispatchReducer,
  countryReducer,
  boxReducer
})
