require('dotenv').config();

//Globals
const PORT = process.env.PORT;
const express = require('express');
const bp = require('body-parser');

//App init
const app = express();

app.use(bp.json());

app.listen(PORT);