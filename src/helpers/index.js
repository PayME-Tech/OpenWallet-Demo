import crypto from 'crypto';

export const createConnectToken = (phone) => {
  const algorithm = 'aes-128-cbc'; // key is 16 length
  const ivbyte = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  // eslint-disable-next-line no-undef
  const iv = Buffer.from(ivbyte);

  const data = {
    userId: '1',
    phone,
    timestamp: Date.now(),
  };

  const cipher = crypto.createCipheriv(algorithm, '3zA9HDejj1GnyVK0', iv);

  let encrypted = cipher.update(JSON.stringify(data), 'utf8', 'base64');

  let result = encrypted + cipher.final('base64');

  console.log({result});

  return result;
};

export function formatNumber(number) {
  return number.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
