const express= require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const axios = require('axios');
const MongoClient = require('mongodb').MongoClient;

mongoose.connect('mongodb+srv://ninie986:Baloune12@movie.fcmhj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));




