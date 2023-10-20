const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8080;
const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('./routes/df-routes')(app);

app.get('/df/server', (req, res) => {
  res.send('Hello World!  2');
});

app.listen(PORT, () => {
  console.log('Server started on port 8080');
});
