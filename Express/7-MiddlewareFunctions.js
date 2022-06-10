const express = require('express');
const app = express();
//Importing Middleware logger function
const logger = require('./Express/middlewareFunct');

//* req => middleware => res
//* Example
//       middleware function
/* app.get('/', logger, (req,res)=>{
    // Only works if the middleware function use next()
    res.send('Home Page');
});
 */

//! APP.USE()

//* For aplying a middleware function to all routes methods, we can use app.use(), instead of adding manually in each route method.

// app.use(logger);
//* Can also specified in which route the middleware function will be passed, if it is not specified, the middleware function will be applied to all methods.
// app.use('/api', logger); 
//* -->  only in routes with '/api' the logger function will be passed. *app.use() must go before any route method to work

//* Using multiple middleware functions, they will we exectued in order
app.use([logger.logger, authorize.authorize]);

app.get('/api/dogs', (req,res)=>{
    // Only works if the middleware function use next()
    res.send('API dogs');
});

app.get('/', (req,res)=>{
    // Only works if the middleware function use next()
    res.send('Home Page');
});

app.listen(5000, ()=>{
    console.log('Server running on port 5000');
});