require('dotenv').config();

//Globals
const PORT = process.env.PORT;
const express = require('express');
const cors = require('cors');

//App init
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(cors())
//Route controller for books
app.use('/books', require('./controllers/books'));
app.use(express.json());


app.get('/', async (req, res) => {
    res.send("Hello World!");
});

app.listen(PORT);