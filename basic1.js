var acceptObject = function (obj) {
    console.log(obj.foo);
    console.log(obj);
};
acceptObject({
    foo: 'Hello',
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
wildAnimal({ name: "Elephant", species: "Mammal" }); //Property age is missing
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
var dates2 = [
    1234,
    1234,
    23456,
    23456,
];
console.log(albums, album2, dates, dates2);
//Tuples----Immutable(array with fixed number of elements)
var album4 = ["Rubber soul", 1980];
//UNIONS AND LITERALS
var messages = Date.now() % 2 === 0 ? ' Hello There ' : null;
var loginID = function (id) {
    console.log(id);
};
loginID(123);
loginID("abc");
var logID = function (id) {
    console.log(id);
};
logID('sdfghjkl');
logID(123456);
var myObj = {
    age: 23,
    name: 'John',
    hobbies: ['Reading', 'Cooking', 'Gardening'],
};
console.log(myObj);
var myColor = function (color, yesorno) {
    console.log("Do I love the ".concat(color, " color? ").concat(yesorno, "."));
};
myColor('yellow', 'yes');
myColor('black', 'no');
myColor('white', 'no');
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
logging('qwerty');
logging(123456);
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
    if (typeof year === 'string') {
        console.log("The album was released in ".concat(year.toUppercase(), ".")); // `year` is string
    }
    else if (typeof year === 'number') {
        console.log("The album was released in ".concat(year.toFixed(0), ".")); // `year` is number
    }
};
