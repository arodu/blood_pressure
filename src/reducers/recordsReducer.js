import {
  ADD_RECORD,
  ADD_RECORD_SUCCESS,
  ADD_RECORD_FAILED,
  ADD_NAME
} from '../types'

const initialState = {
  records: [],
  name: '',
  error: false,
  loading: false,
}

export default function(state = initialState, action){
  switch (action.type) {
    case ADD_RECORD:
        return {
          ...state,
          error: false
        };

    case ADD_RECORD_SUCCESS:
        return {
          ...state,
          error: false,
          records: [...state.records, action.payload],
          name: action.payload.name,
        }

    case ADD_RECORD_FAILED:
        return {
          ...state,
          error: true,
        }

    case ADD_NAME:
        return {
          ...state,
          name: action.payload,
        }

    default:
        return state;
  }

}