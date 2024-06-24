const crypto = require('crypto');
const dotenv = require('dotenv');

dotenv.config();

const algorithm = 'aes-256-cbc';
const key = Buffer.from(process.env.ENCRYPTION_KEY, 'hex');

if (key.length !== 32) {
  throw new Error('Invalid ENCRYPTION_KEY length. Must be 32 bytes.');
}

const decrypt = ({ iv, encryptedData }) => {
  let decipher = crypto.createDecipheriv(algorithm, key, Buffer.from(iv, 'hex'));
  let decrypted = decipher.update(encryptedData, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
};

module.exports = decrypt;





