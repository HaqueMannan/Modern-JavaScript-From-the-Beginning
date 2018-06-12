// CommonJS Module Syntax
const person = require('./mymodule1');
console.log(person.name)

// ES2015 Module Syntax
import { people, sayHello } from './mymodule2';
console.log(people.name)
console.log(sayHello())


/* To import everything from a module without specifying each thing we can use the below syntax to impart all as something. To access the thing from the module we use the as name i.e. mod in front of the thing we want to have access to from the module. 
Below is an example - this has been commented out because it will cause an error as we are already exporting the module using the above method. */

// import * as mod from './mymodule2';
// console.log(mod.person.name);
// console.log(mod.sayHello());


/* No need for curly {} braces because in the module file this is function has been exported using the export default syntax. */
import greeting from './mymodule2';
console.log(greeting);