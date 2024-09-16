const express = require('express');
const mongoose = require('mongoose');
const connect=require('../src/database.js');
const { configDotenv } = require('dotenv');
configDotenv();


const app = express();

app.use(express.json());

connect()

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
