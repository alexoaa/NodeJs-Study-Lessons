const http = require('http');
const port = 5000;
const server = http.createServer((req,res)=>{
    if (req.url === '/') {
        res.end('Home Page');
        console.log('Home Page');
    }
    if (req.url === '/about') {
        for (let i = 0; i < 1000; i++) {
            for (let i = 0; i < 10; i++) {
            console.log(`${i}`);
        }
    }
        res.end('About Page');
        console.log('About Page');
    }
    res.end('Error Page');
    console.log('Error Page');
});

server.listen(port, ()=>{
    console.log(`Server listening on port ${port}...`);
});