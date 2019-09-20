import {
  VALIDATE_FORM,
  VALIDATE_FORM_SUCCESS,
  VALIDATE_FORM_FAILED
} from '../types'

export const initValidation = () => {
  return {
    type: VALIDATE_FORM
  }
}

export const validationSuccess = () => {
  return {
    type: VALIDATE_FORM_SUCCESS
  }
}

export const validationFailed = () => {
  return {
    type: VALIDATE_FORM_FAILED
  }
}

