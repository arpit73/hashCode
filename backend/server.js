const express = require('express');
const fs = require('fs');

const port = process.env.PORT || 5000;

var app = express();

app.post('/', (req, res) => {
    console.log(req);
    res.redirect('/pdf');
});

app.get('/pdf', function(req, res) {
    var filePath = '/pdf/CV.pdf';
    fs.readFile(__dirname + filePath, (err, data) => {
        res.contentType('application/pdf');
        res.send(data);
    });
});

app.listen(port, () => {
    console.log(`Server up on port ${port}.`);
});
module.exports = {
    app
};
