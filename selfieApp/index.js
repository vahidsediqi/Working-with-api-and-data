const express = require ('express');
const app = express();
app.listen(3000, () => console.log('Listening To Port 3000 from nodeJs'));
app.use(express.static('public'))

console.log('hello from index.js');