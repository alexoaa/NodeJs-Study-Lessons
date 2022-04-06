const EventEmitter = require('events');

//Instance from the class of the events module
const customEmitter = new EventEmitter();

//*First listen for event the emit it

// methods of EventEmiiter obj -> 
// on - listen for an event  ---- emitter.on(eventName, listener)
// emit - emit an event  ----  emitter.emit(eventName[, ...args])

customEmitter.on('response', (name, id)=>{
    console.log(`data received id: ${id}`);
});
//*It is posible to have many functions with the same eventName
customEmitter.on('response', (name)=>{
    console.log(`some other logic here Name: ${name}`);
});
//*It si posible to pass arguments when emitting the event
customEmitter.emit('response', 'Alex', 22);
console.log(customEmitter.eventNames());


//? CREATING A SERVER AND ADDING AN EVENT 
const http = require('http');
const port = 5000;
const server = http.createServer();
server.on('request', (req,res)=>{
    res.end('Welcome');
});
server.listen(port);