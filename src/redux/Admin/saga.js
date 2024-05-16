import { takeEvery, put, call, all } from "redux-saga/effects";
import {actionTypes,weatherSucces,weatherError,} from "./action";
// import {startLoader,stopLoader} from '../Common/Loader/action'
import adminservice from "../../service/adminservice";


function* weather({ payload }) {
  try {
    // yield put(startLoader());
    const data = yield call(adminservice.weather, payload);
    yield put(weatherSucces(data));
  } catch (error) {
    yield put(weatherError(error));
    console.log(error);
  } finally {
    // yield put(stopLoader());
  }
}




export default function* rootSaga() {
  yield all([takeEvery(actionTypes.WEATHER, weather)]);
  
}