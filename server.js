const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const listRoutes = require('./routes/listRoutes');
const userRoutes = require('./routes/userRoutes');
const emailRoutes = require('./routes/emailRoutes');
const { errorHandler } = require('./middlewares/errorHandler');

dotenv.config();

const app = express();
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected')).catch(err => console.error(err));

app.use('/lists', listRoutes);
app.use('/users', userRoutes);
app.use('/emails', emailRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
