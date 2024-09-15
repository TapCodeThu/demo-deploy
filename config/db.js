const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();
const uri = process.env.CONNECT_MONGOOSE_URI || 'mongodb://localhost:27017/customers';

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB', err);
    process.exit(1);
  }
};

  module.exports = connectDB;