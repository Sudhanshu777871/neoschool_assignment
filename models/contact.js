const mongoose = require('mongoose');

const encryptedFieldSchema = new mongoose.Schema({
  iv: { type: String, required: true },
  encryptedData: { type: String, required: true }
}, { _id: false });

const contactSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: encryptedFieldSchema, required: true },
  phone: { type: encryptedFieldSchema, required: true },
  email: { type: encryptedFieldSchema, default: null },
  linkedin: { type: encryptedFieldSchema, default: null },
  twitter: { type: encryptedFieldSchema, default: null },
});

module.exports = mongoose.model('Contact', contactSchema);
