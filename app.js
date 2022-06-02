const express = require('express');
const app = express();
const {dogs} = require('./data');
const {people} = require('./data');

app.get('/',(req,res)=>{
    res.send('<h1>Home Page</h1><div><h2>API</h2><a href="/api/dogs">Dogs</a><p><a href="/api/people">People</a></p></div>')
});
// app.get('/api/dogs', (req, res)=>{
//     const newDogs = dogs.map((dog)=>{
//         const {id,name,image} = dog;
//         return {id,name,image}
//     });
//     res.json(newDogs);
// });

//? Route parameters

// app.get('/api/dogs/:dogBreed',(req,res)=>{
//     console.log(req.params);
//     const dogBreed = req.params.dogBreed;
//     const singleDog = dogs.find(dog => dog.breed === dogBreed);
//     console.log(singleDog);
//     if(!singleDog) {
//         console.log(404);
//         return res.status(404).send('Page Not Found!');
//     }
//     return res.json(singleDog);
// });

//? QUERY PARAMETERS
app.get('/api/dogs',(req,res)=>{
    console.log(req.query);
    //Query params defined  --- Resources -->
    // https://www.freecodecamp.org/learn/back-end-development-and-apis/basic-node-and-express/get-query-parameter-input-from-the-client
    // https://www.youtube.com/watch?v=dqCULpd7OWY

    const {breed,name} = req.query;

    //Asigning new array (sortedDgos) with spread operator the dogs array  --- Resources -->
    // https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-the-spread-operator-to-evaluate-arrays-in-place

    let sortedDogs = [...dogs];
    if(breed) {
        sortedDogs = sortedDogs.filter(dog => {
            return dog.breed.startsWith(breed);
        });
    }
    if(name) {
        sortedDogs= sortedDogs.filter(dog=>{
            return dog.name.startsWith(name);
        });
    }
    //Validation if the array does not has items
    if(sortedDogs.length < 1) {
        return res.status(200).json({status: '200', message: 'No search found.'});
    }
    res.status(200).json(sortedDogs);
});

app.get('/api/people', (req,res)=>{
    res.json(people);
});

app.all('*',(req,res)=>{
    res.status(404).send('Page Not Found!');
});

app.listen(5500, ()=>{
    console.log('Server running on port 5500.');
});