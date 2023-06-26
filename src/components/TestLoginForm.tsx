import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logIn, logInWithGoogle, signUp } from '@/features/auth/authSlice';
import { RootState } from '@/store';

function TestLoginForm() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state: RootState) => state.auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogIn = () => {
    dispatch(logIn({ email, password }));
  };
  const handleLogInWithGoogle = () => {
    dispatch(logInWithGoogle());
  };

  const handleSignUp = () => {
    dispatch(signUp({ email, password }));
  };

  return (
    <>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={handlePasswordChange} />
      </div>
      <button onClick={handleLogIn} disabled={loading}>
        로그인
      </button>
      <button onClick={handleLogInWithGoogle} disabled={loading}>
        구글로그인
      </button>
      <button onClick={handleSignUp} disabled={loading}>
        회원가입
      </button>
      {error && <p>Error: {error}</p>}
    </>
  );
}

export default TestLoginForm;
