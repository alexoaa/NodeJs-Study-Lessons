// *** Modules ***

// import { sayHi } from './1-ModulesFunctions.js';
// import names from './1-ModulesNames.js';


const modulesFunct= require('./1-ModulesFunctions.js');
const names = require('./1-ModulesNames.js');
console.log(names);
modulesFunct.sayHi(names.name1);