const express = require('express');
const dbConnect = require('./config/db');
const authRoutes = require('./routes/auth');
const contactRoutes = require('./routes/contact');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

dbConnect();

app.use('/api/auth', authRoutes);
app.use('/api/contact', contactRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


