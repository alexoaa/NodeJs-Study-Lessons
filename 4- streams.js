/* STREAMS */
// Streams are used ro read or write sequentially
/* Types: 
Writeable - write data sequentially, 
Readable - used to read data sequentially, 
Duplex - used to both, read and write data sequentially  
Transform - data can be modified when wirting or reading */

//Use case, using streams when reading files

const {createReadStream} = require('fs');

const stream = createReadStream('./bigText.txt');
//default 64kb
//last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./bigText.txt', {highWaterMark: 90000}); 
// const stream = createReadStream('./bigText.txt', {encoding: 'utf8'}); 


stream.on('data',(result)=>{
    console.log(result);
});
stream.on('error',(err)=> console.log(err));