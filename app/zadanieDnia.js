//Twój kod


const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
const app = express();

app.use(express.static('./public/zadanieDnia/'));
app.use(bodyParser.urlencoded());
app.use(cookieParser());

app.post('/save', (req, res) => {
    const { comment } = req.body;
    if (req.cookies.comments) {
        const comments = JSON.parse(req.cookies.comments);
        comments.push(comment)
        res.cookie('comments', JSON.stringify(comments), { maxAge: 2628000000 })
        // res.send('dodano komentarz <a href="/">Main Page</a>')
    } else {
        res.cookie('comments', JSON.stringify([comment]), { maxAge: 2628000000 });
        // res.send('utworzono bazę komentarzy <a href="/">Main Page</a>')
        //console.log('utworzono tablicę ')
    }

    res.send(`<a href="/">Strona główna</a>`)

});

app.get('/', (req, res) => {
    if (req.cookies.comments) {
        const comments = JSON.parse(req.cookies.comments)
        res.send(comments)
    } else {
        res.send("wpisz komentarz")
    }
});



app.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});