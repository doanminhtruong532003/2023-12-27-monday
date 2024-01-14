// sagas.ts
import { call, put, takeLatest } from "redux-saga/effects";
import { fakeApiCall } from "./api"; // import hàm fake API
import * as actionTypes from "./../actionTypes/actionTypes";
import * as actions from "./../constant/action";

function* submitFormSaga(action: ReturnType<typeof actions.submitForm>) {
  try {
    const response: string = yield call(fakeApiCall, action.payload);
    yield put(actions.submitFormSuccess(response));
  } catch (error) {
    const errorMessage = (error as Error).message || "Unknown error";
    yield put(actions.submitFormFailure(errorMessage));
  }
}

export default function* rootSaga() {
  yield takeLatest(actionTypes.SUBMIT_FORM, submitFormSaga);
}
