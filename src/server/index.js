/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use('/login', (req, res) => {
  res.send({
    token: 'test123',
  });
});

app.listen(8080);
