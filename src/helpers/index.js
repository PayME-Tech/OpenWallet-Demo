import crypto from 'crypto';

export const createConnectToken = (phone, secretKey) => {
  const algorithm = 'aes-128-cbc'; // key is 16 length
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
