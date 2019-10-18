import {
  ADD_RECORD,
  ADD_RECORD_SUCCESS,
  ADD_RECORD_FAILED,
  ADD_NAME,
  LOAD_RECORDS,
  LOAD_RECORDS_SUCCESS,
  LOAD_RECORDS_FAILED,
} from '../types'

const initialState = {
  records: [],
  name: '',
  error: false,
  loading: true,
}

export default function(state = initialState, action){
  switch (action.type) {
    case ADD_RECORD:
        return {
          ...state,
          error: false,
          loading: true,
        };

    case ADD_RECORD_SUCCESS:
        return {
          ...state,
          error: false,
          records: [...state.records, action.payload],
          name: action.payload.name,
          loading: false,
        }

    case ADD_RECORD_FAILED:
        return {
          ...state,
          error: true,
          loading: false,
        }

    case ADD_NAME:
        return {
          ...state,
          name: action.payload,
        }

    case LOAD_RECORDS:
      return{
        ...state,
        loading: true,
      }

    case LOAD_RECORDS_SUCCESS:
      return{
        ...state,
        records: action.payload,
        loading: false,
        error: false,
      }

    case LOAD_RECORDS_FAILED:
      return{
        ...state,
        records: [],
        error: true,
        loading: false,
      }

    default:
        return state;
  }

}