import {
  ADD_RECORD,
  ADD_RECORD_SUCCESS,
  ADD_RECORD_FAILED,
  ADD_NAME
} from '../types'

import clientAxios from '../configs/axios'

export function createRecordAction(record){
  return (dispatch) => {
    dispatch( newRecord() )

    clientAxios
      .post('/records', record)
      .then(response => {
        //console.log(response)
        dispatch( newRecordSuccess(record) )
      })
      .catch(error => {
        console.log(error)
        dispatch( newRecordFailed(error) )
      })
  }
}

export const newRecord = () => ({
  type: ADD_RECORD
})

export const newRecordSuccess = (record) => ({
  type: ADD_RECORD_SUCCESS,
  payload: record
})

export const newRecordFailed = (error) => ({
  type: ADD_RECORD_FAILED,
  payload: error
})

export const addName = (name) => ({
  type: ADD_NAME,
  payload: name
})