{
  a = 10;
}

console.log(a);

var a; // hoisitng  => still gives out put as 10;

/************************************************************************/

console.log(a);

var a; // undefined

/************************************************************************/

{
  a = 10;
}

console.log(a);
abc();
var a; // hoisitng  => still gives out put as 10;
let b;
const c = 10;

function abc() {
  console.log("12");
}

/************************************************************************/

let mentor = {
  name: "Harsh",
  work: "TechTable",
  program: "Web Dev",
};

console.log(mentor.name);

let mentor = {
  name: {
    first: "Harsh",
    last: "Goel",
  },
  work: "TechTable",
  program: "Web Dev",
};

console.log(mentor.name.last);
/************************************************************************/

let mentor = {
  name: {
    first: "Harsh",
    last: "Goel",
  },
  work: "TechTable",
  program: "Web Dev",
};

console.log(mentor.name.last);

const age = 12;

mentor.age = 12;

console.log(mentor);
/************************************************************************/

let mentor = {
  name: {
    first: "Harsh",
    last: "Goel",
  },
  work: "TechTable",
  program: "Web Dev",
};

function myFun(obj) {
  console.log(obj);
}

myFun(mentor);

/************************************************************************/

document.getElementById("button").addEventListener("click", () => {});
/************************************************************************/

const abc = () => {
  //this keyword is not available
};
/************************************************************************/

document.getElementById("button").addEventListener("click", () => {
  console.log(this);
});
/************************************************************************/

let a = 6; //number
let b = "6"; // string

console.log(a == b); // true  6 = 6
console.log(a === b); // false as 6 != "6"

/************************************************************************/

let a = 6; //number
let b = "6"; // string

console.log(a == b); // true  6 = 6
console.log(a === b); // false as 6 != "6"

console.log(typeof a);
console.log(typeof b);

/************************************************************************/

var cars = ["Saab", "Volvo", "BMW"];
//    0      1        2

cars.splice(0, 2); // index, no of elements
// cars.pop();

console.log(cars);
/************************************************************************/

var cars = ["Saab", "Volvo", "BMW"];
//    0      1        2

// cars.splice(0, 2); // index, no of elements
// cars.pop();

console.log(cars.length);

/************************************************************************/

var index;

for (index = 0; index < 5; index++) {
  console.log(index);
}
/************************************************************************/

var index;

for (index = 0; index < 5; index++);
{
  console.log(index);
}
/************************************************************************/
