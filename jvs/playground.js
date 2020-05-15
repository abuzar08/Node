var a;
var b;
var c;

a = 10;
b = 20;
c = "This is a ";
//
// console.log("a = ", a);
// console.log("b = ", b);
// console.log("c = ", c);
//
a = a + 10;
b = b + 5;
c = c + "string!"; //Can concatenate
c += " and another string!";
//
// console.log("a = ", a);
// console.log("b = ", b);
// console.log("c = ", c);
//
var mysStr = "This is the start. " + "\nThis is the end";
// console.log(mysStr);

var fName = "Abu";
var sName = "Zar";

var name = fName + " " + sName;

var intro = "My name is " + name + ".";

//console.log(intro);

function func(a, b){
  return (a + b)
}

var ans = func(100, 105)
console.log(ans);
