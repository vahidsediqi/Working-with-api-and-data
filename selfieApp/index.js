
const express = require ('express');
const Datastore = require('nedb');

const app = express();

// Listening to port 3000 to run the web server
app.listen(3000, () => console.log('Listening To Port 3000 from nodeJs'));

// Giving limits for response
app.use(express.json({ limit: '1mb' }));

// Looking for public folder to run the index.html file
app.use(express.static('public'));

// creating database
const database = new Datastore('myDataBase.db');
database.loadDatabase();
// making the API ./api is the url (This is the Rout and end point for the api)
app.post('/api', (request, response) => {
    console.log('I got a request');
    const data = request.body;
    const timestamp = Date.now();
    data.timestamp = timestamp;
    database.insert(data);
    response.json({
        status: 'success',
        timestamp: timestamp,
        latitude: data.lat,
        logtitude: data.log
    });
});