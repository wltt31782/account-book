import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TempItem } from '@/types/models';

// tempItem 상태 정의
export type TempItemState = {
  tempItems: TempItem[];
  loading: boolean;
  error: string | null;
};

// tempItem 초기값
const initTempItemState: TempItemState = {
  tempItems: [],
  loading: false,
  error: null,
};

// createSlice를 사용하여 tempItemSlice 생성
const tempItemSlice = createSlice({
  name: 'tempItem',
  initialState: initTempItemState,
  reducers: {
    // tempItems 취득 시작 액션
    fetchTempItems(state) {
      state.loading = true;
      state.error = null;
    },
    // tempItems 취득 성공 액션
    fetchTempItemsSuccess(state, action: PayloadAction<TempItem[]>) {
      state.tempItems = action.payload;
      state.loading = false;
      state.error = null;
    },
    // tempItems 취득 실패 액션
    fetchTempItemsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// 액션 생성자 함수들을 actions 객체로 내보냄
export const { fetchTempItems, fetchTempItemsSuccess, fetchTempItemsFailure } = tempItemSlice.actions;

// tempItemSlice의 리듀서를 기본 내보내기로 설정
export default tempItemSlice.reducer;
