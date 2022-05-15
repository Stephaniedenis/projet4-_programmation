require ('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require ('body-parser');
const cors = require ('cors');


const PORT = process.env.PORT || 3000 ;
const moviesRoutes = require('./Routes/moviesRoutes');

//database connection
require('./config/database');

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

//routes
app.use('/api/moviesRoutes', moviesRoutes);

//server running
app.listen(PORT,()=>{
    console.log(`The app listening at server ://localhost: ${PORT}`)
});