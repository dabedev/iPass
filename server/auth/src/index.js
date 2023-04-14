require('dotenv').config();
const express = require('express');
const app = express();

app.get('/', (req, res) => res.status(200).json({ message: "Hello World" }));

app.listen(process.env.PORT, () => console.log('Running AUTH service at ' + process.env.PORT));