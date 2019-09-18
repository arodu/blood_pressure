import { combineReducers } from 'redux'
import measuresReducer from './measuresReducer'

export default combineReducers({
  measures: measuresReducer,
})