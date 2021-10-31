'use strict';
const password = 'set_password';
const path = require('path');
const express = require('express');
const pc = require('./controls');
const port = 3000;
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));
app.use((err, req, res, next) => res.status(500).send('Something broke!'));

app.post('/command/:command', (req, res) => {
    const command = req.params.command;
    const passwordIn = req.body.password;

    if (passwordIn !== password) {
        res.send({error: true, msg: 'Wrong password'});
    } else {
        pc.run(command, (err) => {
            console.log(err);
            res.send({error: err != undefined, msg: 'Error executing the command'});
        });
    }
});
app.listen(port,'ip_address',() => console.log(`Server listening on port: ${port}`));
