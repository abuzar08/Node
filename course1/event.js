//To bring Event driven programming

const EventEmitter = require ('events'); // Bring module as
const eventemitter = new EventEmitter(); //Create instance

eventemitter.on('tutorial', (num1, num2)=> {
  console.log("Event Occured");
  console.log("Sum= ", num1 + num2);
}) //Takes arg -> Listener, Event

eventemitter.emit('tutorial', 1, 2);

//Inheriting object from eventemitter

class Person extends EventEmitter{
  constructor(name){
     super();
     this._name = name;
  }

  get name (){
    return this._name;
  }
}

let pedro = new Person ('Pedro');

let christina = new Person('Christina');

//Listener for Pedro

pedro.on('name', ()=>{
  console.log("My Name is: ", pedro.name);
}); //Attention to method without ()

christina.on('name', ()=>{
  console.log("My Name is: ", christina.name);
})

pedro.emit('name');
christina.emit('name');
