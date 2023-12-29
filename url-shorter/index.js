const express = require('express');
const { get } = require('express/lib/response');
const { connect } = require('http2');
const app = express();
const path = require('path'); 
const short = require('./getlink');


const mongo = require('mongoose');
mongo.connect('mongodb://localhost/shorten', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.static(path.join(__dirname)));


 

app.use(express.urlencoded({ extended: false }));






app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/mylink', async (req, res) => {
    console.log(req.body);
    await short.create({ full: req.body.output})
    res.redirect('/');
})


app.get('/:shorturl', async (req, res) => {
    console.log(req.params.shorturl);
});






app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


