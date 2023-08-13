const mongoose = require('mongoose');



const MONGODB_URI = 'YOUR_MONGODB_URI';
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;