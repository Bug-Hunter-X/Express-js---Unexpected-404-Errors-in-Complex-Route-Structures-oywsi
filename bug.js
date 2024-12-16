const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//Uncommon error: Incorrect path handling leading to 404 errors even with correct routes
//Scenario: A deeply nested route structure with middleware or dynamic segments might cause path matching to fail unexpectedly.