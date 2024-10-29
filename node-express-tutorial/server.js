const express = require('express');
const app = express();
const PORT = 4999;

// middleware
app.use(express.json());
app.use(express.static('public'));
app.use(require('cors')());

function mw(req, res, next) {
    console.log('middleware');
    const {id} = req.params
    if(id != 8) {
        res.sendStatus(403);
    }
    next();
}

//temp database
const db = []

// scheduler

function cron(ms,fn) {
    async function cb() {
        clearTimeout(timeout);
        await fn();
        timeout = setTimeout(cb, ms);
    }
    let timeout = setTimeout(cb, ms);
    return () => {};
}

function consoleDB() {
    console.log(db);
}

// cron(5000, consoleDB);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.delete('/:id', mw,(req, res) => {
    console.log('DELETE request received');
    res.sendStatus(200);
});

app.post('/api/info', (req, res) => {
    const{information} = req.body;
    db.push(information);
    console.log(db);
    res.status(201).json({ message: 'Hello POST', myMessage: information });
});


app.put('/api', (req, res) => {
    const {word,banana} = req.query;
    console.log(word,banana);
    res.sendStatus(200);
});

// app.delete('/delete/:id/:name', (req, res) => {
//     const { id, name } = req.params;
//     console.log('DELETE request received', id, name);
//     res.send('Hello DELETE');
// });