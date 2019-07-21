const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '/../react-client/dist')));
app.listen(port, () => {
  console.log(`listening on port ${port}!`);
});
