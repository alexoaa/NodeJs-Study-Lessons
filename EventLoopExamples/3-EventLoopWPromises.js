// const {readFile, writeFile} = require('fs');
//! USING FS.PROMISES
const {readFile, writeFile} = require('fs').promises;

const path = './EventLoopExamples/first.txt';
const path2 = './EventLoopExamples/second.txt';
const mixedPath = './EventLoopExamples/mixed.txt';

// WITHOUT PROMISES
/* readFile(path,'utf8',(err,data)=>{
    if(err){
        return;
    } else {
        console.log(data);
        readFile('./EventLoopExamples/first.txt','utf8',(err,data)=>{
            if(err){
                return;
            } else {
                console.log(data);
            }
        });
    }
}); */


// WITH PROMISES
/* const getText = (path)=>{
    return new Promise((res,rej)=>{
        readFile(path,'utf8',(err,data)=>{
            if(err){
                rej(err);
            } else {
                res(data);
            }
        });  
    });
} */
// getText(path)
//     .then(result => console.log(result))
//     .catch(error => console.log(error));


// WITH ASYNC - AWAIT
/* const start = async() => {
    try {
        const first = await getText(path);
        const second = await getText(path2);
        console.log(first,second);
    } catch (error) {
        console.log(error);
    }
}
start(); */

// USING UTIL MODULE AND PROMISIFY FUNCT
const util = require('util');
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async() => {
    try {
            //! USING UTIL MODULE
        // const first = await readFilePromise(path, 'utf8');
        // const second = await readFilePromise(path2, 'utf8');
        // await writeFilePromise(mixedPath, `THIS IS THE MIXED.TXT FROM : ${first} ${second}`);
        // const mixed = await readFilePromise(mixedPath, 'utf8');
            //! USING FS.PROMISE
        const first = await readFile(path, 'utf8');
        const second = await readFile(path2, 'utf8');
        await writeFile(mixedPath, `THIS IS THE MIXED.TXT FROM : ${first} ${second}`);
        const mixed = await readFile(mixedPath, 'utf8');

        console.log(first,second, mixed);

    } catch (error) {
        console.log(error);
    }
}
start();
