const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('./public'));

// app.get('/', (req,res)=>{
//     res.status(200).sendFile(path.resolve(__dirname, './index.html'));
// });
// because index.html is a static asset, it will be in public folder, and because
// get method is by defualt in the browser/server, index.html will be in the root path and will auto open the file when a user hits the server

app.all('*', (req,res)=>{
    res.status(404).send('<h1>Page Not Found! :(</h1>');
});

app.listen(5500, ()=>{
    console.log('SERVER LISTENING ON PORT 5500');
});