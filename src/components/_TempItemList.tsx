import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import { fetchTempItems } from '@/features/_tempItem/tempItemSlice';

function TempItemList() {
  const tempItems = useSelector((state: RootState) => state.tempItem.tempItems);
  const loading = useSelector((state: RootState) => state.tempItem.loading);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchTempItems());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <>loading...</>
      ) : (
        <ul>
          {tempItems.map((tempItem) => {
            return (
              <li key={tempItem.id}>
                {tempItem.name} / {tempItem.email}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default TempItemList;
