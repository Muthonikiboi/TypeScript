var acceptObject = function (obj) {
    console.log(obj.foo);
    console.log(obj);
};
acceptObject({
    foo: "Hello",
    bar: 123,
    baz: true,
});
var my_obj = {};
// const my_Result=obj.foo
//Checking errors
var a = null;
var album = {
    artist: "TV",
    title: "TV Show",
    year: 2021,
};
var loginUser = function (user) {
    console.log(user);
};
var user1 = {
    job: {
        title: "Librarian",
    },
};
var user2 = {
    job: {
        title: "Lecturer",
    },
};
var user3 = {
    job: {
        title: "Student",
    },
};
var user4 = {
    job: {
        title: "Trainer",
    },
};
loginUser(user1);
loginUser(user2);
loginUser(user3);
loginUser(user4);
var run = function (message) {
    console.log(message);
};
run("Hello, World!");
var myFunct = function (a, b) {
    return a + b;
};
console.log(myFunct(24, 56));
var Testing = function (message) {
    console.log(message);
};
Testing("I am testing id nodemon and --watch are working properly💥💥💥");
var wildAnimal = function (animal) {
    console.log(animal);
};
//Optional you use ?
var wildAnimal1 = function (animal) {
    console.log(animal);
};
// wildAnimal({ name: "Elephant", species: "Mammal" }); //Property age is missing
wildAnimal1({ name: "Elephant", species: "Mammal" });
var contactName = function (user) {
    return "".concat(user.first, " ").concat(user.last);
};
var mySchool = {
    name: "Dedan Kimathi University of Technology",
    level: "University",
    yearDeveloped: 1990,
};
console.log(mySchool);
var lilians = function (herschool) {
    console.log(herschool);
};
lilians({ name: "St.Claire Gils", level: "HighSchool", yearDeveloped: 1950 });
//Array Syntax
var albums = [
    "Rubber Soul",
    "Revolver",
    "Sgt,Pepper's Lonely Hearts Club Band",
];
var dates = [1234, 1234, 23456, 23456];
var album2 = [
    "Rubber Soul",
    "Revolver",
    "Sgt, Pepper's Lonely Hearts Club Band",
];
var dates2 = [1234, 1234, 23456, 23456];
console.log(albums, album2, dates, dates2);
//Tuples----Immutable(array with fixed number of elements)
var album4 = ["Rubber soul", 1980];
///SOME WORK NOT DONE HERE
//UNIONS AND LITERALS===Either this type or that type sting|number|boolean|
var messages = Date.now() % 2 === 0 ? " Hello There " : null;
var loginID = function (id) {
    console.log(id);
};
loginID(123);
loginID("abc");
var logID = function (id) {
    console.log(id);
};
logID("sdfghjkl");
logID(123456);
var myObj = {
    age: 23,
    name: "John",
    hobbies: ["Reading", "Cooking", "Gardening"],
};
console.log(myObj);
var color = function (color) {
    console.log("The color is ".concat(color, "."));
};
var myColor = function (color, yesorno) {
    console.log("Do I love the ".concat(color, " color? ").concat(yesorno, "."));
};
myColor("yellow", "yes");
myColor("black", "no");
myColor("white", "no");
var myCombination = function (combo) {
    console.log(combo);
};
//NARROWING
// let myVar : string | number = 'Muthonikiboi';
// if(typeof myVar ==='string'){
//     myVar = myVar.toUpperCase();
// }
// console.log(myVar);
//NB: Unions are wider than Their members.
var logging = function (id) {
    console.log(id);
};
logging("qwerty");
logging(123456);
var getAlbumYear1 = function (year) {
    if (typeof year === "string") {
        console.log("The album was released in ".concat(year.toUpperCase(), "."));
    }
    else if (typeof year === "number") {
        console.log("The album was released in ".concat(year.toFixed(0), "."));
    }
    console.log(year);
};
getAlbumYear1(1950);
getAlbumYear1("1950245678909865");
console.log("My name is Joy");
//This doesn't work in reverse
// const loggingIn=(id :number)=>{
//     console.log(`This is users ${id}`);
// }
// const User ={
//     id: string|number
// }
// const user: User = {
//     id: 123,
//   }
//   logId(user.id)
//Using Typeof
var getAlbumYear = function (year) {
    if (typeof year === "string") {
        console.log("The album was released in ".concat(year.toUpperCase(), ".")); // `year` is string
    }
    else if (typeof year === "number") {
        console.log("The album was released in ".concat(year.toFixed(0), ".")); // `year` is number
    }
};
var album8 = {
    name: "Rubber Soul",
    type: "Pop",
    prodYear: 1980,
    length: 34.99,
};
console.log(album8);
var employee1 = {
    name: "John",
    employeeID: 123,
};
console.log(employee1);
var employee2 = {
    name: "Jane",
};
console.log(employee2);
var manager1 = {
    name: "Bob",
    employeeID: 456,
    department: "Sales",
};
console.log(manager1);
//all items must be included amd you cannot include your own as it leads to an error-Unless it is optional(?)
var manager2 = {
    name: "Bob",
    employeeID: 456,
    department: "IT" ///miss this gives an error
};
console.log(manager2);
var Managersepc = {
    name: "Bob",
    employeeID: 456,
    department: "Sales",
    salary: 50000,
};
console.log(Managersepc);
var person1 = {
    name: "John",
    age: 30,
    hobbies: ["reading", "cooking", "gardening"],
};
var person3 = {
    name: "John",
    age: 30,
    hobbies: ["reading", "cooking", "gardening"],
};
//Object Types in functions
function processValue(value) {
    console.log(value);
}
processValue({ name: "Alice" });
processValue([1, 2, 3, 4, 5]);
processValue(function () { });
var albumGenre = "rock";
var handleGenre = function (genre) {
};
console.log(albumGenre);
var Paymentstats;
(function (Paymentstats) {
    Paymentstats["pending"] = "pending";
    Paymentstats["declined"] = "declined";
    Paymentstats["accepted"] = "accepted";
})(Paymentstats || (Paymentstats = {}));
//lets retrieve the payment status form a database
var statusPayment = "pending";
var JooyUser = {
    name: "Jooy",
    status: Paymentstats[statusPayment],
};
console.log(JooyUser);
