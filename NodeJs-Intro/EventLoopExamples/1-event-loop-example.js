// TO CALL AND EXECUTE MODULE IN APP.JS     require ('./EventLoopExamples/1-event-loop-example.js');
// IF FIRST.TXT DELETE IT TO SEE HOW IT WORKS

/* TO GET A FOURTH EXAMPLE WIRTE THIS IN APP.JS 
require ('./EventLoopExamples/1-event-loop-example.js');
require ('./EventLoopExamples/2-setTimeOut.js');
*/

const {readFile, writeFile} = require("fs");
require('colors');
console.log('Starting readFile EventLoop example:'.red);
console.log('started a first task'.blue);
readFile('./EventLoopExamples/first.txt', 'utf8', (err,result)=>{
    if (err) {
        console.log(err);
        writeFile('./EventLoopExamples/first.txt','Happening first task', (err,result)=>{
            if (err) {
                console.log(err);
                return;
            }
            readFile('./EventLoopExamples/first.txt', 'utf8', (err,result)=>{
                if (err) {
                    console.log(err);
                    return;
                  }
                  console.log(result.green);
                  console.log('completed first task'.blue);
                  console.log('Ending readFile EventLoop example:'.red);
            });
            
        });
        return;
    }
    console.log(result.green);
    console.log('completed first task'.blue);
    console.log('Ending readFile EventLoop example:'.red);

});
console.log('starting next task');