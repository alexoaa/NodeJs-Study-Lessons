const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/') {
        res.end('Welcome to our home page');
    }
    if(req.url === '/about'){
        res.end('This is the about page');
    }
    if(req.url === '/error' ) {
        res.end('<h1>ERROR</h1><p>The page you are looking for does not exists.</p>');
    }
});

server.listen(5000);