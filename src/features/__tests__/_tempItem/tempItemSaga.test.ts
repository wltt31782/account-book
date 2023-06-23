import { call, put } from 'redux-saga/effects';
import { fetchTempItemsSuccess, fetchTempItemsFailure } from '@/features/_tempItem/tempItemSlice';
import { fetchTempItemsSaga } from '@/features/_tempItem/tempItemSaga';
import { getTempItems } from '@/services/api/_tempApi';

describe('tempItemSaga/fetchTempItemsSaga', () => {
  it('tempItems취득이 성공했을 경우', () => {
    const tempItems = [
      { id: '1', name: 'test1', email: 'test1@gmail.com' },
      { id: '2', name: 'test2', email: 'test2@gmail.com' },
    ];
    const generator = fetchTempItemsSaga();

    expect(generator.next().value).toEqual(call(getTempItems));
    expect(generator.next(tempItems).value).toEqual(put(fetchTempItemsSuccess(tempItems)));
    expect(generator.next().done).toBe(true);
  });

  it('tempItems취득이 실패했을 경우', () => {
    const error = new Error('취득 실패');
    const generator = fetchTempItemsSaga();

    expect(generator.next().value).toEqual(call(getTempItems));
    expect(generator.throw(error).value).toEqual(put(fetchTempItemsFailure(error.message)));
    expect(generator.next().done).toBe(true);
  });
});
