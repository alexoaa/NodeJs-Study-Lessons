const express = require('express');
const router = express.Router();

//? Module sql import
const mysqlConnection = require('../database');

router.get('/dogs', (req, res) => {
    mysqlConnection.query('SELECT * FROM dogs', (err, results, fields) => {
        if (err) throw err;
        res.status(200).json(results);
    });
});

router.get('/dogs/:id', (req, res) => {
    const { id } = req.params;
    if (!isNaN(id)) { //Checks if id is a number
        mysqlConnection.query('SELECT * FROM dogs WHERE id = ?', [id], (err, results, fields) => {
            if (err) throw err;
            if ((Object.keys(results).length === 0)) { //Checks if object results is empty
                return console.log('Match not found');
            }
            res.status(200).json(results[0]); //[0] to quit [] from the response
        });
    } else {
        console.log({ error: 'Param Not a Number' });
    }
});

router.post('/', (req, res) => {
    const { id, name, breed, age, gender } = req.body;
    //*error https://stackoverflow.com/questions/1346209/unknown-column-in-field-list-error-on-mysql-update-query
    //* const query = `CALL dogsAddOrEdit(${id}, ${name}, ${breed}, ${age}, ${gender});`;

    const query = 'CALL dogsAddOrEdit(?, ?, ?, ?, ?);';

    console.log(req.body);

    //! http://expressjs.com/en/4x/api.html#req.body

    if (!(Object.keys(req.body).length === 0)) {
        mysqlConnection.query(query, [id, name, breed, age, gender], (err, result, fields) => {

            if (err) throw err;
            res.json({ Status: 'Dog Saved' });
        });
    } else {
        console.log(req.body);
        res.status(405).json('No params');
    }
});

router.put('/:id', (req,res)=>{
    const { name, breed, age, gender  } = req.body;
    const { id } = req.params;
    const query = 'CALL dogsAddOrEdit(?, ?, ?, ?, ?);';
    mysqlConnection.query(query, [id, name, breed, age, gender],(err, results, fields)=>{
        if (err) throw err;
        res.json("Dog Updated");
    });
    console.log(req.params, req.body)
});

router.delete('/:id', (req, res)=>{
    const { id } = req.params;
    const query = 'DELETE FROM dogs WHERE id = ?';
    mysqlConnection.query(query, [id], (err, results, fields)=>{
        if (err) throw err;
        res.json('Dog eliminated from DataBase');
    });
});

module.exports = router;