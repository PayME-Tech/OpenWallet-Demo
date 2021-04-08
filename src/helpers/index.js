import React from 'react';
import crypto from 'crypto';
import {ImagesSVG} from '../assets/Image';

export const createConnectToken = (phone, secretKey) => {
  const algorithm = `aes-${secretKey.length === 16 ? 128 : 256}-cbc`; // key is 16 or 32  length
  const ivbyte = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  // eslint-disable-next-line no-undef
  const iv = Buffer.from(ivbyte);

  const data = {
    userId: phone, //Math.floor(Math.random() * 10000000),
    phone,
    timestamp: Date.now(),
  };
  // console.log(data.userId)

  const cipher = crypto.createCipheriv(algorithm, secretKey, iv);

  let encrypted = cipher.update(JSON.stringify(data), 'utf8', 'base64');

  let connectToken = encrypted + cipher.final('base64');

  // console.log({connectToken});

  return connectToken;
};

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
  return <ImagesSVG.iconServiceNull />;
};
