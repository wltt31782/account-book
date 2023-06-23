import tempItemReducer, {
  fetchTempItems,
  fetchTempItemsSuccess,
  fetchTempItemsFailure,
  TempItemState,
} from '@/features/_tempItem/tempItemSlice';

describe('tempItemSlice', () => {
  let initialState: TempItemState;

  beforeEach(() => {
    initialState = {
      tempItems: [],
      loading: false,
      error: null,
    };
  });

  test('tempItems취득 시작', () => {
    const nextState = tempItemReducer(initialState, fetchTempItems());
    expect(nextState.loading).toBe(true);
    expect(nextState.error).toBeNull();
  });

  test('tempItems취득이 성공했을 경우', () => {
    const tempItems = [
      { id: '1', name: 'test1', email: 'test1@gmail.com' },
      { id: '2', name: 'test2', email: 'test2@gmail.com' },
    ];
    const nextState = tempItemReducer(initialState, fetchTempItemsSuccess(tempItems));
    expect(nextState.tempItems).toEqual(tempItems);
    expect(nextState.loading).toBe(false);
    expect(nextState.error).toBeNull();
  });

  test('tempItems취득이 실패했을 경우', () => {
    const error = 'Failed to fetch temp items';
    const nextState = tempItemReducer(initialState, fetchTempItemsFailure(error));
    expect(nextState.loading).toBe(false);
    expect(nextState.error).toBe(error);
  });
});
