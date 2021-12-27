const express = require('express');    // importing package
const app = express();                 // to execute application
const mongoose = require('mongoose');   
const bodyParser = require('body-parser');
const core = require('cors');

require('dotenv/config');


// middleware
app.use(core());
app.use(bodyParser.json());

// Import routes
const postsRoute = require('./routes/posts');
const Post = require('./models/Post');
app.use('/posts', postsRoute);


// Creating ROUTES
app.get('/', (req, res) => {              // to get information, / means the route we want to go to
    res.send('We are posted');  // here it shoots back a message
});

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => 
    console.log('=== Connected to mongoDB ===')
);


app.listen(3000);  // прослушивание по заданному порту 

module.exports.app = app;