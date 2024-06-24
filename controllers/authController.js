const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const dummyCredentials = { username: 'saltman', password: 'oai1122' };

exports.login = (req, res) => {
  const { username, password } = req.body;

  if (username === dummyCredentials.username && password === dummyCredentials.password) {
    const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
};
