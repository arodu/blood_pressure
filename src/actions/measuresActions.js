import {
  ADD_MEASURE,
  ADD_MEASURE_SUCCESS,
  ADD_MEASURE_FAILED
} from '../types'

import clientAxios from '../configs/axios'

export function createMeasureAction(measure){
  return (dispatch) => {
    dispatch( newMeasure() )

    clientAxios
      .post('/measures', measure)
      .then(response => {
        //console.log(response)
        dispatch( newMeasureSuccess(measure) )
      })
      .catch(error => {
        console.log(error)
        dispatch( newMeasureFailed(error) )
      })
  }
}

export const newMeasure = () => ({
  type: ADD_MEASURE
})

export const newMeasureSuccess = (measure) => ({
  type: ADD_MEASURE_SUCCESS,
  payload: measure
})

export const newMeasureFailed = (error) => ({
  type: ADD_MEASURE_FAILED,
  payload: error
})