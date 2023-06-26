import { all } from 'redux-saga/effects';
import { tempItemSaga } from '@/features/_tempItem/tempItemSaga';
import { authSaga } from '@/features/auth/authSaga';

function* rootSaga() {
  yield all([tempItemSaga(), authSaga()]);
}

export default rootSaga;
