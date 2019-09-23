import { combineReducers } from 'redux'
import recordsReducer from './recordsReducer'
import validationReducer from './validationReducer'


export default combineReducers({
  records: recordsReducer,
  error: validationReducer,
})