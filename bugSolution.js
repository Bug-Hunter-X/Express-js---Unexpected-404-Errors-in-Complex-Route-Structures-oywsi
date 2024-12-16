const express = require('express');
const app = express();
const port = 3000;

//Improved Route Handling:
//Add more specific routes, adjust middleware placement as needed to handle dynamic segments correctly. 
app.get('/users/:id', (req, res) => {
  //Handle User Details
  const userId = req.params.id;
  res.send(`User details for ID: ${userId}`);
});
app.get('/products/:category/:id', (req, res) => {
  const categoryId = req.params.category;
  const productId = req.params.id;
  res.send(`Product details for category: ${categoryId}, ID: ${productId}`);
});

app.use((req, res, next) => {
  //Middleware
  console.log('Request URL:', req.url);
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
app.use((req, res) => {
  res.status(404).send('Sorry cant find that!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});