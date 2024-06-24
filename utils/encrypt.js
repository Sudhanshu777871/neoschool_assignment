const crypto = require('crypto');
const dotenv = require('dotenv');

dotenv.config();

const algorithm = 'aes-256-cbc';
const key = Buffer.from(process.env.ENCRYPTION_KEY, 'hex');
const iv = Buffer.from(process.env.ENCRYPTION_IV, 'hex');

if (key.length !== 32) {
  throw new Error('Invalid ENCRYPTION_KEY length. Must be 32 bytes.');
}

if (iv.length !== 16) {
  throw new Error('Invalid ENCRYPTION_IV length. Must be 16 bytes.');
}

const encrypt = (text) => {
  let cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return { iv: iv.toString('hex'), encryptedData: encrypted };
};

module.exports = encrypt;


