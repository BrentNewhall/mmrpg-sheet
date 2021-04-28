const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path');

app.set('views', path.join(__dirname, 'pages'));
app.set('view engine', 'ejs');

const port = 5000;

app.get('/', (req, res) => {
  res.render( 'sheet' );
})

app.listen(port, () => console.log(`Server is up and running on port ${port}`));