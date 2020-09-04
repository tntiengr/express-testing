const express = require('express');
const app = express();
const port= 3000;

app.get('/', function (req, res) {
    res.send('<p>Hello, this is homepage</p>'); 
});
app.get('/user', function (req, res) {
    res.send('<p>Hello user</p>'); 
});

app.listen(port, function () {
    console.log('Serer is listening on port '+port);
})