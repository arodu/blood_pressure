import {
  ADD_RECORD,
  ADD_RECORD_SUCCESS,
  ADD_RECORD_FAILED,
  ADD_NAME,
  LOAD_RECORDS,
  LOAD_RECORDS_SUCCESS,
  LOAD_RECORDS_FAILED,
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

export const loadRecordsAction = (name) => {
  return (dispatch) => {
    dispatch(loadRecordsStart())

    clientAxios
      .get('/records?name='+name+'&_sort=date&_order=desc')
      .then(response => {
        //console.log(response)
        dispatch(loadRecordsSuccess(response.data))
      })
      .catch( error => {
        console.log(error)
        dispatch(loadRecordsFailed(error))
      })
  }
}

export const loadRecordsStart = () => ({
  type: LOAD_RECORDS
})

export const loadRecordsSuccess = (records) => ({
  type: LOAD_RECORDS_SUCCESS,
  payload: records
})

export const loadRecordsFailed = (error) => ({
  type: LOAD_RECORDS_FAILED,
  payload: error
})