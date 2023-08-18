const express = require('express');
require('./src/config/dotenv')();
require('./src/config/sequelize');
const path = require('path');

const app = express();
const port = process.env.PORT;
//const cors = require('cors');
const routes = require('./src/routes/routes');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.use('/uploads', express.static(path.join(__dirname, "..", "uploads")));
app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`undefined app listening at http://localhost:${port}`);
});
