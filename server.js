//make base setup for server


//setup libraries
const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3002;
const db = require('./psqlTest')

const app = express();


//we will parse data as JSON
app.use(bodyParser.json());

//for POST requests we will use urlencoded like: applicaton/x-ww-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

//try to do plain response - request
app.get('/', (req, res) => {
    res.json({message: 'Node.js, Express and Postgres inside one boat EEEeeeehaaaaAAAA'});
})

//here we will get response from database to '/cats'
app.get('/cats', db.getCats)

//where we will get a single user data (for instance particular user)
app.get('/cats/1', db.getHHCDname)



//set port and start listen requests 
app.listen(PORT, () => {
    console.log(`Server is listeninig ${PORT}........../`)
});