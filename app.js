//Declaring a variable
//keyword identifier/VAriableName =value
var firstName = " Angelina";

let lastName = " Alorzuke";
let age = 20;
//booleen
let isMarried = true;
//Array
let chrildren =["Angie","Bella","Gusten"];
//object
let other = {
    favoritecolor :"red",
    favoritefruit :"orange",
    favoritesport :"bassketball",
};


const fullName = firstName + "" +lastName;//concatenation
const mySelf =`My name is ${fullName}`;//string interpolation
console.log(mySelf);

//strings
let sentence = "Very soon I expect to master javascript";
//length
console.log(sentence.length);

console.log(sentence.split("Very"));
console.log(sentence.replace("javascript","react"));
console.log(sentence.toLowerCase());
console.log(sentence.toUpperCase());
console.log(sentence.startsWith("T"));
console.log(sentence.endsWith("t"));
console.log(sentence.includes("me"));


//array
let days =["Monday","Tuesday","Wednesday","Thursday"];
console.log(days.length);
days.push("Friday");
console.log(days);
console.log(days.pop());
console.log(days.unshift("sunday"));
console.log(days);
console.log(days.shift());
console.log(days.indexOf("friday"));
console.log(days[3]);
days[5] = "sunday";
console.log(days);

//objects
let Person = {
    firstName:  " Angelina",
    lastName: " Alorzuke",
    age: 20 ,
};
console.log(Person.firstName);
console.log(Person["firstName"]);
console.log(Object.keys(Person));
//for grouping
console.log(Object.entries(Person));
//grouping oject on one line[]
console.log(object.values(Person));

