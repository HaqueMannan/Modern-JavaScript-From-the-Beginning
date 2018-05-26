/* 
----------------------------- 
Singleton Pattern
----------------------------- 
*/


//-----------------------------
// SINGLETON PATTERN
//-----------------------------
const Singleton = (function() {
   let instance;

   function createInstance() {
      const object = new Object({name:'Brad'});
      return object;
   }

   return {
      getInstance: function() {
         if(!instance){
            instance = createInstance();
         }
         return instance;
      }
   }
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

console.log(instanceA);
console.log(instanceA === instanceB);           // This will return true as we cannot have more than one instance of a singleton object.