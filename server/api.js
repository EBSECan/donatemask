const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require("./routes"));

/* istanbul ignore next */
app.use((err, req, res, next) => {
  console.error({ err }, 'Server error');
  res.status(500).send('Internal Server Error');
});

module.exports = app;
