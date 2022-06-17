const express = require('express');
const router = express.Router();

//? Module sql import
const mysqlConnection = require('../database');

router.get('/dogs', (req,res)=>{
    mysqlConnection.query('SELECT * FROM dogs', (err, results, fields)=>{
        if (err) throw err;
        res.status(200).json(results);
    });
});

router.get('/:id',(req,res)=>{
    const { id } = req.params;
    if (!isNaN(id)) { //Checks if id is a number
        mysqlConnection.query(`SELECT * FROM dogs WHERE id = ${id}`, (err, results, fields)=>{
            if (err) throw err;
            if ((Object.keys(results).length === 0)) { //Checks if object results is empty
                return console.log('Match not found');
            }
            res.status(200).json(results[0]); //[0] to quit [] from the response
        });
    } else {
        console.log({error: 'Param Not a Number'});
    }
});

router.post('/')

module.exports = router;