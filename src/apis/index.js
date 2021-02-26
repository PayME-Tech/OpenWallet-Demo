import {callGraphql} from '../redux/graphql';
import {getUniqueId, getUserAgent, isEmulator} from 'react-native-device-info';
import {Platform} from 'react-native';

const SQL_CLIENT_REGISTER = `mutation ClientRegister ($input: ClientRegisterInput!){
	Client {
    Register(input: $input) {
      succeeded
      message
      clientId
    }
  }
}`;
const SQL_SENT_OTP = `mutation Account ($oTPForgotPasswordInput: OTPForgotPasswordInput!) {
    Account {
      ForgotPassword {
        SendOTP(input: $oTPForgotPasswordInput) {
          succeeded
          message
        }
      }
    }
  }`;
const SQL_VERIFY_OTP = `mutation resr ($verifyForgotPasswordInput: VerifyForgotPasswordInput!) {
    Account {
      ForgotPassword {
        VerifyOTP(input: $verifyForgotPasswordInput) {
          succeeded
          message
          state
          linkedNumber
        }
      }
    }
  }`;

const deviceId = getUniqueId();

export const clientRegister = async () => {
  const userAgent = await getUserAgent();
  const IsEmulator = await isEmulator();

  const input = {
    platform: Platform.OS,
    deviceId: deviceId,
    channel: 'channel',
    // version: VersionNumber.appVersion || '1.0.0',
    version: '1.0.0',
    userAgent,
    isEmulator: IsEmulator,
    isRoot: false,
  };
  const res = await callGraphql(SQL_CLIENT_REGISTER, {input});
  return handleResponse(res);
};

export const sentOTP = async (phone) => {
  const oTPForgotPasswordInput = {
    phone,
    clientId: deviceId,
  };
  const res = await callGraphql(SQL_SENT_OTP, {
    oTPForgotPasswordInput,
  });
  return handleResponse(res);
};

export const verifyOTP = async (phone, activeCode) => {
  const verifyForgotPasswordInput = {
    phone,
    clientId: deviceId,
    activeCode,
  };
  const res = await callGraphql(SQL_VERIFY_OTP, {
    verifyForgotPasswordInput,
  });
  return handleResponse(res);
};

//if (!response.data?.errors) {}
const handleResponse = (response) => {
  if (!response.data?.errors) {
    return {status: true, response: response?.data?.data ?? {}};
  } else {
    return {status: false, response: response?.data?.errors ?? {}};
  }
};
