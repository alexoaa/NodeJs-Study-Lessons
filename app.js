//* HTTP METHODS GET, POST, PUT, DELETE
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods

const express = require('express');
const app = express();
let { people } = require('./Express/data');

//? Example for using POST Method 

// statis assets
app.use(express.static('./Express/methods-public'));

// parse form data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());

//* GET METHOD - DEFAULT THAT BROWSER PERFORM - FOR READ DATA
app.get('/api/people', (req, res) => {
    res.status(200).json(people);
});

//* POST METHOD -  - INSERT DATA
app.post('/login', (req, res) => {
    const { name } = req.body;
    if (name) {
        return res.status(200).send(`<script>alert('Welcome ${name}')</script>`);
    }
    res.status(401).send('Please provide valid credentials');
});

app.post('/api/people', (req, res) => {
    const { name } = req.body;
    const person = people.find(person => person.name === name);
    if (!name || !person) {
        return res.status(400).json({ success: false, msg: 'provide a valid credential2' });
    }
    if (!(Object.keys(person).length === 0)) {
        return res.status(201).json(person);
    }
});

app.listen(5000, () => {
    console.log('Server listening on port 5000.');
});