import {ENV} from 'react-native-payme-sdk';

export const AALSAQTYNVAKHSPOU = 'AALSAQTYNVAKHSPOU';

export const APP_ENV = {
  PRODUCTION: {
    appToken:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6NCwiaWF0IjoxNjExOTAzNjU3fQ.GfTRq6gvO0rU0XHx6JksJXIB1hireYyKaX92mTnMb64',

    publicKey:
      '-----BEGIN PUBLIC KEY-----\n' +
      'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAmXR5qmL2lLfInmwGYsB2\n' +
      'WIgoQobh6UQ0tJ3uhzhBSFkvIHqIdrwBAKURe/1S5ZqplZwb91H+hgEJVyVaBPhW\n' +
      'H6TcOG01iBTQkodwUin/JT472G/bWkwbkoM8n9g5uDDG9udd9aB4YJeXQg3vOnxf\n' +
      '7bipFW/Hd3155CWYcRZEFG7Q7GGHpuGj8UHV4nIzxhcOpAVhtAyeWI0+h9M9LH1Y\n' +
      'RPWOOBcweNNbKjDJf1QhsWr1CtuRP4Zeh9Sg+nGVbuKcfjnZQt+ABD83a4cniSzq\n' +
      'Qqe+r2lGubmumo+XQpsJPTg9R/ODmKrkd++6jrHWJbqeITD9xRpDzvgGiWUhhc9F\n' +
      'KQIDAQAB\n' +
      '-----END PUBLIC KEY-----',

    privateKey:
      '-----BEGIN RSA PRIVATE KEY-----\n' +
      'MIIBOQIBAAJAZCKupmrF4laDA7mzlQoxSYlQApMzY7EtyAvSZhJs1NeW5dyoc0XL\n' +
      'yM+/Uxuh1bAWgcMLh3/0Tl1J7udJGTWdkQIDAQABAkAjzvM9t7kD84PudR3vEjIF\n' +
      '5gCiqxkZcWa5vuCCd9xLUEkdxyvcaLWZEqAjCmF0V3tygvg8EVgZvdD0apgngmAB\n' +
      'AiEAvTF57hIp2hkf7WJnueuZNY4zhxn7QNi3CQlGwrjOqRECIQCHfqO53A5rvxCA\n' +
      'ILzx7yXHzk6wnMcGnkNu4b5GH8usgQIhAKwv4WbZRRnoD/S+wOSnFfN2DlOBQ/jK\n' +
      'xBsHRE1oYT3hAiBSfLx8OAXnfogzGLsupqLfgy/QwYFA/DSdWn0V/+FlAQIgEUXd\n' +
      'A8pNN3/HewlpwTGfoNE8zCupzYQrYZ3ld8XPGeQ=\n' +
      '-----END RSA PRIVATE KEY-----',
    env: ENV.PRODUCTION,
    secretKey: '240c70d60d85a4c1bef302ca7a38bd8c',
  },

  SANDBOX: {
    appToken:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Njg2OH0.JyIdhQEX_Lx9CXRH4iHM8DqamLrMQJk5rhbslNW4GzY',
    publicKey: `-----BEGIN PUBLIC KEY-----
      MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAKWcehEELB4GdQ4cTLLQroLqnD3AhdKi
      wIhTJpAi1XnbfOSrW/Ebw6h1485GOAvuG/OwB+ScsfPJBoNJeNFU6J0CAwEAAQ==
      -----END PUBLIC KEY-----`,
    privateKey:
      '-----BEGIN RSA PRIVATE KEY-----\n' +
      'MIIBOwIBAAJBAOkNeYrZOhKTS6OcPEmbdRGDRgMHIpSpepulZJGwfg1IuRM+ZFBm\n' +
      'F6NgzicQDNXLtaO5DNjVw1o29BFoK0I6+sMCAwEAAQJAVCsGq2vaulyyI6vIZjkb\n' +
      '5bBId8164r/2xQHNuYRJchgSJahHGk46ukgBdUKX9IEM6dAQcEUgQH+45ARSSDor\n' +
      'mQIhAPt81zvT4oK1txaWEg7LRymY2YzB6PihjLPsQUo1DLf3AiEA7Tv005jvNbNC\n' +
      'pRyXcfFIy70IHzVgUiwPORXQDqJhWJUCIQDeDiZR6k4n0eGe7NV3AKCOJyt4cMOP\n' +
      'vb1qJOKlbmATkwIhALKSJfi8rpraY3kLa4fuGmCZ2qo7MFTKK29J1wGdAu99AiAQ\n' +
      'dx6DtFyY8hoo0nuEC/BXQYPUjqpqgNOx33R4ANzm9w==\n' +
      '-----END RSA PRIVATE KEY-----',
    env: ENV.SANDBOX,
    secretKey: 'zfQpwE6iHbOeAfgX',
  },
};
