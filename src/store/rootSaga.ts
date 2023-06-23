import { all } from 'redux-saga/effects';
import { tempItemSaga } from '@/features/_tempItem/tempItemSaga';

function* rootSaga() {
  yield all([tempItemSaga()]);
}

export default rootSaga;
