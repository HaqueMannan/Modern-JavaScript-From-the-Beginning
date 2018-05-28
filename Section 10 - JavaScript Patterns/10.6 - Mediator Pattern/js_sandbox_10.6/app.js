/* 
----------------------------- 
Mediator Pattern
----------------------------- 
*/


//-----------------------------
// MEDIATOR PATTERN
//-----------------------------
// Constructor Function for User - colleagues
const User = function(name) {
   this.name = name;
   this.chatroom = null;
}

// User Constructor prototype methods: send and receive chat messages functions.
User.prototype = {
   // Takes in the message and the to user as parameters and calls on the chatroom.send method which takes in the message, this (current user) and to (to user).
   send: function(message, to) {
      this.chatroom.send(message, this, to);
   },
   // Takes in the message and from user to console log the message using the template literal.
   recieve: function(message, from) {
      console.log(`${from.name} to ${this.name}: ${message}`);
   }
}

// Constructor Function for Chatroom - Mediator Interface
const Chatroom = function() {
   let users = {}; // list of users

   return {
      // Users need to register to the chatroom.
      register: function(user) {
         users[user.name] = user;
         user.chatroom = this;
      },
      // Decide whether the message is going to a certain user or to all. Mediating. The 'from' parameter relates to the 'this' parameter in the user.prototype send function above.
      send: function(message, from, to) {
         if(to) {
            // Single user message
            to.recieve(message, from);
         } else {
            // Broadcast (mass) message
            for(key in users) {
               if(users[key] !== from) {
                  users[key].recieve(message, from);
               }
            }
         }
      }
   }
}



//-----------------------------
// USERS
//-----------------------------
const Tony = new User('Tony');
const Diego = new User('Diego');
const Clara = new User('Clara');


//-----------------------------
// CHAT ROOM REGISTRATION
//-----------------------------
const chatroom = new Chatroom();

chatroom.register(Tony);
chatroom.register(Diego);
chatroom.register(Clara);


//-----------------------------
// CHAT ROOM USER CONVERSATION
//-----------------------------
Tony.send('Hello Diego', Diego);
Clara.send('Hey Tony, what time are we meeting up?', Tony);
Diego.send('Hello Everyone!!!!');
