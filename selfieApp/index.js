
const express = require ('express');
const app = express();
app.listen(3000, () => console.log('Listening To Port 3000 from nodeJs'));
app.use(express.json({ limit: '1mb' }));
app.use(express.static('public'));

app.post('/api', (request, response) => {
    console.log('I got a request');
    console.log(request.body);

    const data = request.body;
    response.json({
        status: 'success',
        latitude: data.lat,
        logtitude: data.log
    });
});