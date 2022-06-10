const express = require('express');
const app = express();
const { dogs } = require('./express/data');
const { people } = require('./express/data');

app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1><div><h2>API</h2><a href="/api/dogs">Dogs</a><p><a href="/api/people">People</a></p></div>')
});

//? SENDING SPECIFIC INFO

// app.get('/api/dogs', (req, res)=>{
//     const newDogs = dogs.map((dog)=>{
//         const {id,name,image} = dog;
//         return {id,name,image}
//     });
//     res.json(newDogs);
// });

//? ROUTE PARAMETERS
// Resources --> https://expressjs.com/en/guide/routing.html#route-parameters

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


//? QUERY/URL PARAMETERS
// Resources -->
// https://www.youtube.com/watch?v=dqCULpd7OWY
// Example --> https://hn.algolia.com/api
/* 
app.get('/api/dogs', (req, res) => {
    console.log(req.query);
    //Query params defined  --- Resources -->
    // https://www.freecodecamp.org/learn/back-end-development-and-apis/basic-node-and-express/get-query-parameter-input-from-the-client

    const { breed, name } = req.query;

    //Asigning new array (sortedDgos) with spread operator the dogs array  --- Resources -->
    // https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-the-spread-operator-to-evaluate-arrays-in-place

    let sortedDogs = [...dogs];
    if (breed) {
        sortedDogs = sortedDogs.filter(dog => {
            return dog.breed.startsWith(breed);
        });
        sortedDogs = sortedDogs.map(sDogs => {
            const { breed, name, image } = sDogs;
            return { breed, name, image }
        });
    }
    if (name) {
        sortedDogs = sortedDogs.filter(dog => {
            return dog.name.startsWith(name);
        });
    }
    //Validation if the array has no items
    if (sortedDogs.length < 1) {
        return res.status(200).json({ status: '200', message: 'No search found.' });
    }
    res.status(200).json(sortedDogs);
});
 */

app.get('/api/people', (req, res) => {
    res.json(people);
});

app.all('*', (req, res) => {
    res.status(404).send('Page Not Found!');
});

app.listen(5000, () => {
    console.log('Server running on port 5000.');
});