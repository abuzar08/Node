// const sum = (num1, num2) => num1 + num2; Currently invisible to the world
const sum = (num1, num2) => num1 + num2;

const pi = 3.14;

class SomeMathObject{
  constructor(){
    console.log("Created");
  }
}

// module.exports.sum = sum;
// module.exports.pi = pi
// module.exports.SomeMathObject = SomeMathObject

//OR

module.exports = {sum: sum, PI : pi, SomeMathObject:SomeMathObject }



//console.log(sum(1,78.7));
