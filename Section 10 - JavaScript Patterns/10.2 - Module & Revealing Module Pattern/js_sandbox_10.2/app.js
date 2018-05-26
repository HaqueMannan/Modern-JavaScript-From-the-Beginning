/* 
----------------------------- 
Module & Revealing Module Pattern
----------------------------- 
*/


//-----------------------------
// MODULE PATTERN BASE STRUCTURE
//-----------------------------
// The basic structure/blueprint for Module Pattern.
(function() {
   // Declare private vars and functions

   return {
      // Declare public var and functions
  }
})();


//-----------------------------
// STANDARD MODULE PATTERN EXAMPLE
//-----------------------------
// The first block of code is private and can only be accessed within the module.
// The block of code within the return is public and can be accessed outside the module. However, the return block can access all the private variable and functions because it is within the scope of the module.
const UICtrl = (function() {
   let text = 'Hello World';

   const changeText = function() {
      const element = document.querySelector('h2');
      element.textContent = text;
   }

   return {
      callChangeText: function() {
         changeText();
         console.log(text);         // Demonstrate that private variables and functions can be accessed.
      }
   }
})();

UICtrl.callChangeText();

// UICtrl.changeText();
// This will return TypeError of changeText is not a function because we cannot access the private function changeText outside the scope of the module. Whereas we can access callChangeText because it is made public.

// console.log(UICtrl.text);
// This will return undefined because the text variable is private and we cannot access the variable property/value outside the module.



//-----------------------------
// REVEALING MODULE PATTERN
//-----------------------------
const ItemCtrl = (function() {
   let data = [];

   function add(item) {
      data.push(item);
      console.log('Item Added...');
   }

   function get(id) {
      return data.find(item => {
         return item.id === id;
      });
   }

   return {
      add: add,            // Object Literal: Private Function.
      get: get             // Object Literal: Private Function.
   }
})();

// Functions are made public and therefore accessible outside the module. But if they were not made public and we tried to call on the private function this would return a TypeError. Try commenting out the get: get public function above to see this error.
ItemCtrl.add({id: 1, name: 'John'});
ItemCtrl.add({id: 2, name: 'Mark'});
console.log(ItemCtrl.get(2));