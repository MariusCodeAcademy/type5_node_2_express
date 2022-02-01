const express = require('express');
const func = require('./functions');
const cors = require('cors');
const app = express();
// 3000, 8000 3001 8080 5000
const PORT = 3000;

// MiddleWare
// leis gauti duomenis is bet kurio adreso
app.use(cors());

// api endpoint
// localhost:3000/ => hello back end world
// app - express app
// get - metodas htttp get, post, put, path, delete
// '/' - endpoint address
// request - atejusios uzklausos objektas
// response - atsakymo atgal objektas
// (request, response) => {<ivyks kodas kai ateisim pagal adresa ir metoda>}
app.get('/', (request, response) => {
  response.send('hello back end world');
});

app.get('/api/posts', (request, response) => {
  const post1 = {
    title: 'My first post',
    body: 'Story of My first post',
  };
  response.json(post1);
});

app.get('/api/camel', (request, response) => {
  console.log(`we got ${request.method} request to /api/camel`);
  const rez = func.makeCamelCase('Camel goes in a desert');
  response.json({ message: rez });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
