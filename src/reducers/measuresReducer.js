import {
  ADD_MEASURE,
  ADD_MEASURE_SUCCESS,
  ADD_MEASURE_FAILED,
  ADD_NAME
} from '../types'

const initialState = {
  measures: [],
  name: '',
  error: false,
  loading: false,
}

export default function(state = initialState, action){
  switch (action.type) {
    case ADD_MEASURE:
        return {
          ...state,
          error: false
        };

    case ADD_MEASURE_SUCCESS:
        return {
          ...state,
          error: false,
          measures: [...state.measures, action.payload],
          name: action.payload.name,
        }

    case ADD_MEASURE_FAILED:
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