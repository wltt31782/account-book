import { takeLatest, call, put } from 'redux-saga/effects';
import { fetchTempItems, fetchTempItemsSuccess, fetchTempItemsFailure } from './tempItemSlice';
import { getTempItems } from '@/services/api/_tempApi';
import { TempItem } from '@/types/models';

// tempItems 취득 비동기 작업 처리
export function* fetchTempItemsSaga() {
  try {
    const tempItems: TempItem[] = yield call(getTempItems); // tempItems 취득 API 호출
    yield put(fetchTempItemsSuccess(tempItems)); // 액션 디스패치: tempItems 취득 성공
  } catch (error: any) {
    yield put(fetchTempItemsFailure(error.message)); // 액션 디스패치: tempItems 취득 실패
  }
}

// 각 액션에 대한 Saga 리스너 등록
export function* tempItemSaga() {
  yield takeLatest(fetchTempItems.type, fetchTempItemsSaga);
}
