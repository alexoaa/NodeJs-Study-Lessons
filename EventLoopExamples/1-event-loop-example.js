// TO CALL AND EXECUTE MODULE IN APP.JS     require ('./EventLoopExamples/1-event-loop-example.js');
// IF FIRST.TXT DELETE IT TO SEE HOW IT WORKS

const {readFile, writeFile} = require("fs");
require('colors');

console.log('started a fisrt task'.blue);
readFile('./first.txt', 'utf8', (err,result)=>{
    if (err) {
        console.log(err);
        writeFile('./first.txt','Happening first task', (err,result)=>{
            if (err) {
                console.log(err);
                return;
            }
            readFile('./first.txt', 'utf8', (err,result)=>{
                if (err) {
                    console.log(err);
                    return;
                  }
                  console.log(result.green);
                  console.log('completed second task'.blue);
            });
            
        });
        return;
    }
    console.log(result.green);
    console.log('completed second task'.blue);
});
console.log('starting next task');