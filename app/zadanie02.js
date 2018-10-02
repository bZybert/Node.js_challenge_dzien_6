//Twój kod
//Twój kod
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
const app = express();
app.use(express.static('./public/zadanie02/'));
app.use(bodyParser.urlencoded());
app.use(cookieParser());

let imie = ""
app.post('/cookie/set', (req, res) => {
    const { name } = req.body;
    res.cookie('names', name, {
        maxAge: 2628000000,
    });
    imie = name
    res.end("Zapisano imie")

});

app.get('/cookie/show', (req, res) => {
    //const myCookie = req.cookies.names;
    res.send('Zapisano imię: ' + imie);

});

app.get('/cookie/check', (req, res) => {
    const myCookie = req.cookies.names;
    console.log(myCookie)
    myCookie !== undefined ? res.send('imię zostało już zapisane w ciastku') : res.send('nie zapisano')


});


app.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});