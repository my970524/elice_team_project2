import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import KakaoLogin from '../auth/KakaoLogin';
import InputWithLabel from '../auth/InputWithLabel';
import AuthButton from '../auth/AuthButton';
import { login } from '../redux/authSlice';
import { REACT_APP_HOST_IP_ADDRESS } from '../env';
import {
  AuthPage,
  AuthContainer,
  AuthTitle,
  KakaoBox,
  LineBox,
  Or,
  Line,
  LoginForm,
  AuthFooterBox,
  AuthFooterContent,
} from '../styles/AuthStyle';

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEamil] = useState(null);
  const [password, setPassword] = useState(null);
  const [autoLogin, setAutoLogin] = useState(false);

  const handleChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === 'email') {
      setEamil(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  let isActive = false;
  if (email !== null && password !== null) {
    isActive = true;
  } else {
    isActive = false;
  }

  const handelSubmit = async (event) => {
    event.preventDefault();
    const LOGIN_URL = `${REACT_APP_HOST_IP_ADDRESS}api/token/`;
    const userData = { email, password };

    try {
      const { data } = await axios.post(LOGIN_URL, userData);
      const { username, access, refresh } = data;
      dispatch(login({ username, access }));
      if (autoLogin) {
        localStorage.setItem('refresh', refresh);
      } else {
        sessionStorage.setItem('refresh', refresh);
      }
      axios.defaults.headers.common.Authorization = `Bearer ${access}`;
      navigate('/');
    } catch (error) {
      alert('아이디 또는 패스워드가 잘못되었습니다');
    }
  };

  const handleChecked = ({ target }) => {
    if (!target.checked) {
      setAutoLogin(false);
    } else {
      setAutoLogin(true);
    }
  };

  const handleClickToLogin = () => {
    navigate('/register');
  };

  const handleClickToResetPw = () => {
    navigate('/reset-password');
  };

  return (
    <AuthPage>
      <AuthContainer>
        <AuthTitle>로그인</AuthTitle>
        <KakaoBox className="kakaoButton">
          <KakaoLogin />
        </KakaoBox>
        <LineBox>
          <Line />
          <Or> 또는 </Or>
        </LineBox>
        <LoginForm onSubmit={handelSubmit}>
          <InputWithLabel
            label="이메일"
            name="email"
            type="text"
            placeholder="이메일"
            value={email}
            onChange={handleChange}
          />
          <InputWithLabel
            label="비밀번호"
            name="password"
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={handleChange}
          />
          <AuthButton className={isActive ? 'activeBtn' : 'unactiveBtn'} type="submit" disabled={!isActive}>
            로그인
          </AuthButton>
        </LoginForm>
        <div className="autoLoginBox">
          <input type="checkbox" checked={autoLogin} onChange={handleChecked} />
          자동로그인
        </div>
        <AuthFooterBox>
          <AuthFooterContent>
            <div>아직 이게모약 계정이 없으신가요?</div>
            <div
              className="toButton"
              tabIndex="0"
              role="button"
              onClick={handleClickToLogin}
              onKeyDown={handleClickToLogin}
            >
              가입하기
            </div>
          </AuthFooterContent>
          <Line />
          <AuthFooterContent>
            <div>혹시 비밀번호를 잊으셨나요?</div>
            <div
              className="toButton"
              tabIndex="-1"
              role="button"
              onClick={handleClickToResetPw}
              onKeyDown={handleClickToResetPw}
            >
              비밀번호 재설정
            </div>
          </AuthFooterContent>
        </AuthFooterBox>
      </AuthContainer>
    </AuthPage>
  );
};

export default LoginPage;
