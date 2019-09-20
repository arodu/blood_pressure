import { combineReducers } from 'redux'
import measuresReducer from './measuresReducer'
import validationReducer from './validationReducer'


export default combineReducers({
  measures: measuresReducer,
  error: validationReducer,
})