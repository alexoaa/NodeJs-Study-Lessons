// *** Modules ***
// ! CommonJS
const modulesFunct= require('./1-ModulesFunctions.js');
const data = require('./1-ModulesNames.js');

console.log(data); //Object named data that has all data imported from ModulesNmaes.js
modulesFunct.sayHi(data.name1);
modulesFunct.sayHi(data.person.name) //Accessing object data, then object person then property name
data.items.forEach(item => {  //Accessing the items of the imported array in the object data
    console.log(item);
});