/* 
----------------------------- 
Factory Pattern
----------------------------- 
*/


//-----------------------------
// FACTORY PATTERN FUNCTION
//-----------------------------
// Membership function takes in the name and membership type. If statement will check the membership type and create a new certain type of member object (i.e. simple, standard and super memberships). After creating the object we want to set the member type to the type passed in.
// Finally we have a single method associated with the object called .define that is going to spit out the name, membership type and the cost of the membership.
function MemberFactory() {
   this.createMember = function(name, type) {
      let member;

      if(type === 'simple') {
         member = new SimpleMembership(name);
      } else if (type === 'standard') {
         member = new StandardMembership(name);
      } else if (type === 'super') {
         member = new SuperMembership(name);
      }

      member.type = type;

      member.define =  function() {
         console.log(`${this.name} (${this.type}): ${this.cost}`);
      }

      return member;
   }
}

//-----------------------------
// FACTORY PATTERN CONSTRUCTORS
//-----------------------------
// We need to create the constructors for the membership objects for the above Factory Pattern.
const SimpleMembership = function(name) {
   this.name = name;
   this.cost = '£5';
}

const StandardMembership = function(name) {
   this.name = name;
   this.cost = '£15';
}

const SuperMembership = function(name) {
   this.name = name;
   this.cost = '£25';
}


//-----------------------------
// FACTORY PATTERN GENERATING MEMBERS
//-----------------------------
// Creating empty array object called members.
const members = [];
// Define our factory.
const factory = new MemberFactory();

// Adding members using the .push method and then calling on the .createMember() method from the MemberFactory object function and pass in the two parameters of name and membership type.
members.push(factory.createMember('John Doe', 'simple'));
members.push(factory.createMember('Chris Jackson', 'super'));
members.push(factory.createMember('Janice Williams', 'simple'));
members.push(factory.createMember('Tom Smith', 'standard'));


//-----------------------------
// FACTORY PATTERN OUTPUT
//-----------------------------
// Output Array objects in the console. Will need to click on the arrow button to view more details of each object within the array.
console.log(members);

// Loop through the members object and output each membership details using .define() method created above.
members.forEach(function(member) {
   member.define();
});