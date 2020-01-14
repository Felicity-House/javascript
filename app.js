// name
var name = 'felicity';

//this variable is the number of states
const states = '50';

//sum of 5 + 4
var sum = 5 + 4;

function helloworld(world) {
    alert("Hello " + world);
}

helloworld("world");
helloworld("kbhbjbhjbh");

function checkAge(name, age) {
    if (age < 21) {
        console.log("Sorry " + name + ", you aren't old enough to view this page!")
    }
}
// Abby who is 27, James who is 18, and John who is 17.
checkAge(name, 19);
checkAge("charles", 21);
checkAge("abby", 27);
checkAge("james", 18);
checkAge("john", 17);

let favVeggies = ["carrot", "broccoli", "tomatoes"];

for (let i = 0; i < favVeggies.length; ++i) {
    console.log(favVeggies[i])
}

let peopleArr = [
    {
        name: "Josh",
        age: 25
    },
    {
        name: "felicity",
        age: 19
    },
    {
        name: "dave",
        age: 30
    },
    {
        name: "carol",
        age: 10
    },
    {
        name: "deja",
        age: 27
    },
]

for (let i = 0; i < peopleArr.length; ++i) {
   checkAge(peopleArr[i].name, peopleArr[i].age) 
}

function getlength(word) {
    console.log(word.length)
}

getlength("hello world")