import * as actionTypes from './../actionTypes/actionTypes';

const initialState = {
  loading: false,
  data: null,
  error: null,
};

export default function formReducer(state = initialState, action: any) {
  switch (action.type) {
    case actionTypes.SUBMIT_FORM:
      return { ...state, loading: true, error: null };
    case actionTypes.SUBMIT_FORM_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case actionTypes.SUBMIT_FORM_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
