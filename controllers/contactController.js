const Contact = require('../models/contact');
const encrypt = require('../utils/encrypt');
const decrypt = require('../utils/decrypt');
const mongoose = require('mongoose');


// METHOD (API) FOR CREATE DATA
exports.createContact = async (req, res) => {
  const { name, phone, email, linkedin, twitter } = req.body;

  const encryptedName = encrypt(name);
  const encryptedPhone = encrypt(phone.toString()); // Ensure phone is a string
  const encryptedEmail = email ? encrypt(email) : null;
  const encryptedLinkedin = linkedin ? encrypt(linkedin) : null;
  const encryptedTwitter = twitter ? encrypt(twitter) : null;

  const newContact = new Contact({
    id: new mongoose.Types.ObjectId().toString(),
    name: encryptedName,
    phone: encryptedPhone,
    email: encryptedEmail,
    linkedin: encryptedLinkedin,
    twitter: encryptedTwitter,
  });

  try {
    await newContact.save();
    res.json({ message: 'Contact created successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error creating contact', error: err.message });
  }
};


// METHOD (API) FOR EDIT DATA
exports.editContact = async (req, res) => {
  const { name, email, linkedin, twitter } = req.body;

  try {
    const encryptedName = encrypt(name);
    const contact = await Contact.findOne({ "name.encryptedData": encryptedName.encryptedData });

    if (!contact) return res.status(404).json({ message: 'Contact not found' });

    if (email) contact.email = encrypt(email);
    if (linkedin) contact.linkedin = encrypt(linkedin);
    if (twitter) contact.twitter = encrypt(twitter);

    await contact.save();
    res.json({ message: 'Contact updated successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error updating contact', error: err.message });
  }
};

// METHOD (API) FOR SEARCH DATA
exports.searchContacts = async (req, res) => {
  const { search_token } = req.body;

  try {
    const contacts = await Contact.find({});
    
    const decryptedContacts = contacts.filter(contact => {
      try {
        return decrypt(contact.name).includes(search_token);
      } catch (error) {
        return false;
      }
    }).map(contact => ({
      id: contact.id,
      name: decrypt(contact.name),
      phone: decrypt(contact.phone),
      email: contact.email ? decrypt(contact.email) : null,
      linkedin: contact.linkedin ? decrypt(contact.linkedin) : null,
      twitter: contact.twitter ? decrypt(contact.twitter) : null,
    }));

    res.json(decryptedContacts);
  } catch (err) {
    res.status(500).json({ message: 'Error searching contacts', error: err.message });
  }
};

