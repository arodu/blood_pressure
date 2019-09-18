import {
  ADD_MEASURE,
  ADD_MEASURE_SUCCESS,
  ADD_MEASURE_FAILED
} from '../types'

const initialState = {
  measures: [],
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
          measures: [...state.measures, action.payload]
        }

    case ADD_MEASURE_FAILED:
        return {
          ...state,
          error: true,
        }

    default:
        return state;
  }

}