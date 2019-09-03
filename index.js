// implement your API here
const express = require('express');
const db = require('./data/db.js');
const server = express();

server.listen(4444, () => console.log("server on 4444"));

server.get('/api/users', (req, res) => {
    db.find().then(users => {
        res.status(200).json(users);
    })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: "The users information could not be retrieved." });
        });
});

server.post('/api/users', (req, res) => {
    console.log(req.body);
    res.end();

});


server.get('/api/users/:id', (req, res) => {
    const userId = req.params.id;
    db.findById(userId).then(user => {
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ error: "The user with the specified ID does not exist." });
        }
    })
        .catch(err => {
            consolelog(err);
            res.status(500).json({ error: "The user information could not be retrieved." });
        
        });
});