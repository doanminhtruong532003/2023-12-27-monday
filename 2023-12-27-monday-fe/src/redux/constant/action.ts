import * as actionTypes from './../actionTypes/actionTypes';

export const submitForm = (payload: any) => ({
  type: actionTypes.SUBMIT_FORM,
  payload,
});

export const submitFormSuccess = (response: any) => ({
  type: actionTypes.SUBMIT_FORM_SUCCESS,
  payload: response,
});

export const submitFormFailure = (error: string) => ({
  type: actionTypes.SUBMIT_FORM_FAILURE,
  payload: error,
});
