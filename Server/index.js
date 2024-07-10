// Example using Express.js (replace with your connection string and collection name)
const express = require('express');
const mongoose = require('mongoose');

const app = express();

const uri = "mongodb+srv://ssinghroyal0:mNvwNhe7hax9f7xx@cluster0.jc64bkm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/";
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

app.listen(3000, () => console.log('Server listening on port 3000'));
