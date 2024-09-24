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
//UNIONS AND LITERALS
var messages = Date.now() % 2 === 0 ? ' Hello There ' : null;
var loginID = function (id) {
    console.log(id);
};
loginID(123);
loginID("abc");
loginID(true); //type boolean is not supported
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
var loggingIn = function (id) {
    console.log("This is users ".concat(id));
};
var User = {
    id: string | number
};
var user = {
    id: 123,
};
logId(user.id);
//Using Typeof
var getAlbumYear = function (year) {
    if (typeof year === 'string') {
        console.log("The album was released in ".concat(year.toUppercase(), ".")); // `year` is string
    }
    else if (typeof year === 'number') {
        console.log("The album was released in ".concat(year.toFixed(0), ".")); // `year` is number
    }
};
