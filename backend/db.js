// db.js

const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://Nikinikk:Koko1510@test.lukuivv.mongodb.net/';

let client;

async function connect() {
  try {
    if (!client) {
      client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
      await client.connect();
      console.log('Connected to MongoDB Atlas');
    }
    return client;
  } catch (err) {
    console.error('Error connecting to MongoDB Atlas', err);
  }
}

module.exports = { connect };
