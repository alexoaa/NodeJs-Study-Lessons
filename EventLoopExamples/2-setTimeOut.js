// TO CALL AND EXECUTE MODULE IN APP.JS     require ('./EventLoopExamples/2-setTimeOut.js');
require('colors');
// started operating system process
console.log('Starting setTimeOut EventLoop example:'.red);
console.log('first');
setTimeout(() => {
  console.log('second');
  console.log('Ending setTimeOut EventLoop example:'.red);
}, 0);
console.log('third');
// completed and exited operating system process