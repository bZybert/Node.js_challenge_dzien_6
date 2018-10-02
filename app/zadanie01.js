//Twój kod
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
const app = express();
app.use(express.static('./public/zadanie01/'));
app.use(bodyParser.urlencoded());
app.use(cookieParser());

app.post('/result', (req, res) => {
    const { numba, numbb } = req.body;
    parseInt(numbb) % parseInt(numba) === 0 ? res.send('liczba B JEST dzielnikiem liczby A') : res.send('liczba B NIE jest dzielnikiem liczby A')

});


app.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});