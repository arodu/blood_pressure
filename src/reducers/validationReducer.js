import {
  VALIDATE_FORM,
  VALIDATE_FORM_SUCCESS,
  VALIDATE_FORM_FAILED
} from '../types'

const initialState = {
  error: false
}

export default function(state=initialState, action){
  switch (action.type) {
    case VALIDATE_FORM:
        return {
          ...state,
          error: false
        }
    case VALIDATE_FORM_SUCCESS:
        return {
          ...state,
          error: false
        }
    case VALIDATE_FORM_FAILED:
        return {
          ...state,
          error: true
        }
    default:
      return state
  }
}