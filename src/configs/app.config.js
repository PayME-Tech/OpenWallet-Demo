import {ENV} from 'react-native-payme-sdk';

export const AALSAQTYNVAKHSPOU = 'AALSAQTYNVAKHSPOU';

export const APP_ENV = {
  PRODUCTION: {
    appToken:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6NywiaWF0IjoxNjE0OTExMDE0fQ.PJ0ke0Ky_0BoMPi45Cu803VlR8F3e8kOMoNh9I07AR4',
    publicKey:
     `-----BEGIN PUBLIC KEY-----
     MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAJQKJge1dTHz6Qkyz95X92QnsgDqerCB
     UzBmt/Qg+5E/oKpw7RBfni3SlCDGotBJH437YvsDBMx8OMCP8ROd7McCAwEAAQ==
     -----END PUBLIC KEY-----`,
    privateKey:
      `-----BEGIN RSA PRIVATE KEY-----
      MIIBOQIBAAJAZCKupmrF4laDA7mzlQoxSYlQApMzY7EtyAvSZhJs1NeW5dyoc0XL
      yM+/Uxuh1bAWgcMLh3/0Tl1J7udJGTWdkQIDAQABAkAjzvM9t7kD84PudR3vEjIF
      5gCiqxkZcWa5vuCCd9xLUEkdxyvcaLWZEqAjCmF0V3tygvg8EVgZvdD0apgngmAB
      AiEAvTF57hIp2hkf7WJnueuZNY4zhxn7QNi3CQlGwrjOqRECIQCHfqO53A5rvxCA
      ILzx7yXHzk6wnMcGnkNu4b5GH8usgQIhAKwv4WbZRRnoD/S+wOSnFfN2DlOBQ/jK
      xBsHRE1oYT3hAiBSfLx8OAXnfogzGLsupqLfgy/QwYFA/DSdWn0V/+FlAQIgEUXd
      A8pNN3/HewlpwTGfoNE8zCupzYQrYZ3ld8XPGeQ=
      -----END RSA PRIVATE KEY-----`,
    env: ENV.PRODUCTION,
    secretKey: 'bda4d9de88f37efb93342d8764ac9b84',
  },

  SANDBOX: {
    appToken:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6MTQsImlhdCI6MTYxNDE2NDI3MH0.MmzNL81YTx8XyTu6SczAqZtnCA_ALsn9GHsJGBKJSIk',
    publicKey: `-----BEGIN PUBLIC KEY-----
      MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAMyTFdiYBiaSIBgqFdxSgzk5LYXKocgT
      MCx/g1gz9k2jadJ1PDohCs7N65+dh/0dTbT8CIvXrrlAgQT1zitpMPECAwEAAQ==
      -----END PUBLIC KEY-----`,
    privateKey: `-----BEGIN RSA PRIVATE KEY-----
      MIIBOQIBAAJAZCKupmrF4laDA7mzlQoxSYlQApMzY7EtyAvSZhJs1NeW5dyoc0XL
      yM+/Uxuh1bAWgcMLh3/0Tl1J7udJGTWdkQIDAQABAkAjzvM9t7kD84PudR3vEjIF
      5gCiqxkZcWa5vuCCd9xLUEkdxyvcaLWZEqAjCmF0V3tygvg8EVgZvdD0apgngmAB
      AiEAvTF57hIp2hkf7WJnueuZNY4zhxn7QNi3CQlGwrjOqRECIQCHfqO53A5rvxCA
      ILzx7yXHzk6wnMcGnkNu4b5GH8usgQIhAKwv4WbZRRnoD/S+wOSnFfN2DlOBQ/jK
      xBsHRE1oYT3hAiBSfLx8OAXnfogzGLsupqLfgy/QwYFA/DSdWn0V/+FlAQIgEUXd
      A8pNN3/HewlpwTGfoNE8zCupzYQrYZ3ld8XPGeQ=
      -----END RSA PRIVATE KEY-----`,
    env: ENV.SANDBOX,
    secretKey: 'de7bbe6566b0f1c38898b7751b057a94',
  },
};
