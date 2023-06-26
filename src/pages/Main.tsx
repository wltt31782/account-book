import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { RootState } from '@/store';
import { TestLoginForm } from '@/components';
import { logOut } from '@/features/auth/authSlice';

function Main() {
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state: RootState) => state.auth);

  if (loading) {
    return <>loading...</>;
  }

  if (!user) {
    return (
      <Routes>
        <Route path="/login" element={<TestLoginForm />} />
        <Route path="*" element={<Navigate replace to="/login" />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route
        path="/main"
        element={
          <>
            <button onClick={() => dispatch(logOut())} disabled={loading}>
              로그아웃
            </button>
          </>
        }
      />
      <Route path="*" element={<Navigate replace to="/main" />} />
    </Routes>
  );
}

export default Main;
