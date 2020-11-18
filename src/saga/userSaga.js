import { call, takeLatest, all, put, select,fork,delay,take } from 'redux-saga/effects';
import * as userTypes from '../constants/userConstant';
import { getListUser } from "../apis/userApi";
import { fetchListUser, fetchListUserSuccess, fetchListUserFailed } from "../actions/userAction";
export default function* userSaga() {
    yield all([
        yield takeLatest(userTypes.FETCH_LIST_USER, watchFetchListUserAction)
    ])
}
function* watchFetchListUserAction() {
    const resp = yield call(getListUser);
    console.log(resp);
    if  (resp.status === 200) {
        yield put(fetchListUserSuccess(resp.data));
    } else {
        yield put(userTypes.fetchListUserFailed(resp.error))
    }
}