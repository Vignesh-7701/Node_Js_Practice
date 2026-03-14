const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/userRoutes')

app.use(bodyParser.json());

app.use(routes)

app.listen(3000 , ()=> console.log("Server started on port 3000"))