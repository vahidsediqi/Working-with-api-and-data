
const express = require ('express');
const app = express();

// Listening to port 3000 to run the web server
app.listen(3000, () => console.log('Listening To Port 3000 from nodeJs'));

// Giving limits for response
app.use(express.json({ limit: '1mb' }));

// Looking for public folder to run the index.html file
app.use(express.static('public'));

// making the API ./api is the url (This is the Rout and end point for the api)
app.post('/myapiendpoint', (request, response) => {
    console.log('I got a request');
    console.log(request.body);

    const data = request.body;
    response.json({
        status: 'success',
        latitude: data.lat,
        logtitude: data.log
    });
});