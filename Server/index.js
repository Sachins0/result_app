const dotenv = require('dotenv')
// Example using Express.js (replace with your connection string and collection name)
const express = require('express');
const mongoose = require('mongoose');
dotenv.config({
  path:'./.env'
})

const app = express();

const uri = process.env.MONGODB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

const resultsSchema = new mongoose.Schema({
  name: String,
  marks: String,
  dateOfBirth:String,
  rollNumber:String,
  sem1Sgpa:String,
  sem2sgpa:String
});

const CsdsResultCollect = mongoose.model('CsdsResultCollect', resultsSchema);

app.get('/api/resultsdb', async (req, res) => {
  try {
    const results = await CsdsResultCollect.find();
    res.json(results);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(process.env.PORT || 8000, () => console.log('Server listening on port 8000'));
