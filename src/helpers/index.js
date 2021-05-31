import React from 'react';
import {ImagesSVG} from '../assets/Image';
import store from './../redux/redux.store';
import {ERROR_CODE} from 'react-native-payme-sdk';
import {updateApp} from './../redux/slices/app.slice';

export function formatNumber(number) {
  return number.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function checkValidPhoneNumber(number) {
  return /^(0|84)\d{9}$/g.test(number);
}

export const getIconService = (code) => {
  if (code === 'WATE') {
    return <ImagesSVG.iconServiceWater />;
  }
  if (code === 'FTEL') {
    return <ImagesSVG.iconServicePhoneLocation />;
  }
  if (code === 'MOBILE_TOPUP') {
    return <ImagesSVG.iconServicePhone />;
  }
  if (code === 'TIVI') {
    return <ImagesSVG.iconServiceTV />;
  }
  if (code === 'ISEC') {
    return <ImagesSVG.iconServiceIsec />;
  }
  if (code === 'ATIC') {
    return <ImagesSVG.iconServicePlane />;
  }
  if (code === 'HOCPHI') {
    return <ImagesSVG.iconServiceLearnbill />;
  }
  if (code === 'MOBILE_CARD') {
    return <ImagesSVG.iconServiceCardPhone />;
  }
  if (code === 'ADSL') {
    return <ImagesSVG.iconServiceInternet />;
  }
  if (code === 'POWE') {
    return <ImagesSVG.iconServiceLight />;
  }
  if (code === 'PPMB') {
    return <ImagesSVG.iconServicePhoneBill />;
  }
  if (code === 'GAME_CARD') {
    return <ImagesSVG.IconGameCard />;
  }
  if (code === 'BAOHIEM') {
    return <ImagesSVG.IconServiceInsurrance />;
  }
  if (code === 'TET') {
    return <ImagesSVG.IconServiceLixi />;
  }
  if (code === 'ADVANCE_SALARY') {
    return <ImagesSVG.IconUngLuongHome />;
  }
  return <ImagesSVG.iconServiceNull />;
};

export const checkLoginSDK = () => {
  const isLogin = store.getState().appReducer.isLoginSDK === true;
  console.log('???????????? checkLoginSDK: ', isLogin);
  return isLogin;
};

export const handleErrorSDK = (error = {}) => {
  console.log('..............handleErrorSDK');
  const code = error?.code;
  if (code === ERROR_CODE.EXPIRED) {
    store.dispatch(updateApp({isLoginSDK: false}));
  }
};
