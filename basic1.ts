const acceptObject = (obj: { foo: string; bar: number; baz: boolean }) => {
  console.log(obj.foo);
  console.log(obj);
};
acceptObject({
  foo: "Hello",
  bar: 123,
  baz: true,
});

const my_obj = {};
// const my_Result=obj.foo

//Checking errors
const a = null;
// a.toString();

//3:Warnings close to the source of problem
type Album = {
  artist: string;
  title: string;
  year: number;
};

const album: Album = {
  artist: "TV",
  title: "TV Show",
  year: 2021,
};

const loginUser = (user: { job: { title: string } }) => {
  console.log(user);
};

const user1 = {
  job: {
    title: "Librarian",
  },
};

const user2 = {
  job: {
    title: "Lecturer",
  },
};

const user3 = {
  job: {
    title: "Student",
  },
};

const user4 = {
  job: {
    title: "Trainer",
  },
};

loginUser(user1);
loginUser(user2);
loginUser(user3);
loginUser(user4);

const run = (message: String) => {
  console.log(message);
};

run("Hello, World!");

const myFunct = (a: number, b: number) => {
  return a + b;
};

console.log(myFunct(24, 56));

const Testing = (message: string) => {
  console.log(message);
};

Testing("I am testing id nodemon and --watch are working properly💥💥💥");

const wildAnimal = (animal: { name: string; age: number; species: string }) => {
  console.log(animal);
};

//Optional you use ?
const wildAnimal1 = (animal: {
  name: string;
  age?: number;
  species: string;
}) => {
  console.log(animal);
};

// wildAnimal({ name: "Elephant", species: "Mammal" }); //Property age is missing
wildAnimal1({ name: "Elephant", species: "Mammal" });

const contactName = (user: { first: string; last: string }) => {
  return `${user.first} ${user.last}`;
};

//Type Aliases
type school = {
  name: string;
  level: string;
  yearDeveloped: number;
};

const mySchool: school = {
  name: "Dedan Kimathi University of Technology",
  level: "University",
  yearDeveloped: 1990,
};

console.log(mySchool);

const lilians = (herschool: school) => {
  console.log(herschool);
};
lilians({ name: "St.Claire Gils", level: "HighSchool", yearDeveloped: 1950 });

//Array Syntax
let albums: string[] = [
  "Rubber Soul",
  "Revolver",
  "Sgt,Pepper's Lonely Hearts Club Band",
];
let dates: number[] = [1234, 1234, 23456, 23456];

let album2: Array<string> = [
  "Rubber Soul",
  "Revolver",
  "Sgt, Pepper's Lonely Hearts Club Band",
];
let dates2: Array<number> = [1234, 1234, 23456, 23456];
console.log(albums, album2, dates, dates2);

//Tuples----Immutable(array with fixed number of elements)

let album4: [string, number] = ["Rubber soul", 1980];

///SOME WORK NOT DONE HERE

//UNIONS AND LITERALS===Either this type or that type sting|number|boolean|
const messages = Date.now() % 2 === 0 ? " Hello There " : null;

const loginID = (id: string | number) => {
  console.log(id);
};

loginID(123);
loginID("abc");
// loginID(true);//type boolean is not supported

//Declarering union types
type id = string | number;

const logID = (id: id) => {
  console.log(id);
};
logID("sdfghjkl");
logID(123456);

type everything =
  | string
  | number
  | boolean
  | object
  | null
  | {
      age: number;
      name: string;
      hobbies: string[];
    };

const myObj: everything = {
  age: 23,
  name: "John",
  hobbies: ["Reading", "Cooking", "Gardening"],
};
console.log(myObj);

//Literal Types
type color = "black" | "white" | "green" | "yellow";
type yesorno = "yes" | "no";

const color = (color: color) => {
  console.log(`The color is ${color}.`);
};

const myColor = (color: color, yesorno: yesorno) => {
  console.log(`Do I love the ${color} color? ${yesorno}.`);
};

myColor("yellow", "yes");
myColor("black", "no");
myColor("white", "no");

//Combining Two unions
type color1 = "black" | "white" | "green" | "yellow";
type yesorno1 = "yes" | "no";
type combination = color1 | yesorno1;

const myCombination = (combo: combination) => {
  console.log(combo);
};

//NARROWING
// let myVar : string | number = 'Muthonikiboi';

// if(typeof myVar ==='string'){
//     myVar = myVar.toUpperCase();
// }
// console.log(myVar);

//NB: Unions are wider than Their members.
const logging = (id: string | number) => {
  console.log(id);
};
logging("qwerty");
logging(123456);

const getAlbumYear1 = (year: string | number | boolean) => {
  if (typeof year === "string") {
    console.log(`The album was released in ${year.toUpperCase()}.`);
  } else if (typeof year === "number") {
    console.log(`The album was released in ${year.toFixed(0)}.`);
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
const getAlbumYear = (year: string | number) => {
  if (typeof year === "string") {
    console.log(`The album was released in ${year.toUpperCase()}.`); // `year` is string
  } else if (typeof year === "number") {
    console.log(`The album was released in ${year.toFixed(0)}.`); // `year` is number
  }
};

//OBJECTS
type Album7 = {
  name: string;
  type: string;
  prodYear: number;
  length: number;
};

const album8: Album7 = {
  name: "Rubber Soul",
  type: "Pop",
  prodYear: 1980,
  length: 34.99,
};

console.log(album8);

// let album9 ={
//     name: string,
//     type: string,
//     prodYear: number, ////////////REMEMBER TO CHECK ON THIS SECTION OF OBJECT
//     length: number,
// }

// const album10: typeof album9 = {
//   name: "Revolver",
//   type: "Rock",
//   prodYear: 1976,
//   length: 34.2,
// };

// console.log(album10);

type person = {
  name: string;
};
type employee = {
  employeeID?: number;
};

type employeeInfo = person & employee;

const employee1: employeeInfo = {
  name: "John",
  employeeID: 123,
};
console.log(employee1);

const employee2: employeeInfo = {
  name: "Jane",
};
console.log(employee2);

//INTERFACE EXTEND-----Better for larger projects as it is larger
interface EmployeeZ {
  name: string;
  employeeID: number;
}

interface Manager extends EmployeeZ {
  department: string;
}

const manager1: Manager = {
  name: "Bob",
  employeeID: 456,
  department: "Sales",
};
console.log(manager1);

//all items must be included amd you cannot include your own as it leads to an error-Unless it is optional(?)
const manager2: Manager = { 
    name: "Bob",
    employeeID: 456,
    department:"IT"///miss this gives an error
  };
console.log(manager2);

//Multiple Extends
interface EmployeeY {
    salary: number,
}

interface Multiple extends EmployeeY , EmployeeZ {
    department: string
}

const Managersepc:Multiple ={
    name: "Bob",
    employeeID: 456,
    department: "Sales",
    salary: 50000,
}
console.log(Managersepc);

//Using index signatures
type Person0 = {
  [key: string]: unknown;
};

const person1: Person0 = {
  name: "John",
  age: 30,
  hobbies: ["reading", "cooking", "gardening"],
};

//Using Record type
type Person1 = Record<string, unknown>;

const person3: Person1 = {
  name: "John",
  age: 30,
  hobbies: ["reading", "cooking", "gardening"],
};

// const AlbumEaward : Record<"Granny" |"MercuryPrize"|"BillBoard"> ={//////CONSIDER CHACKING THIS AGAIN.
//     Granny: "1964",
//     MercuryPrize: "1985",
//     BillBoard: "1967",
// };
// console.log(AlbumEaward);


//working using interface and the Extend Keyword.
interface  BaseAwards3 {
  Granny: boolean;
  MercuryPrize: boolean;
  BillBoard: boolean;
}
interface ExtendAlbumAwards extends BaseAwards3 {
  [award:string]: boolean;
}

//Object Types in functions
function processValue(value:object){
  console.log(value);
}
processValue({name:"Alice"});
processValue([1,2,3,4,5]);
processValue(()=>{});
// processValue("Hello World");

//Be specific with object type value========CHECK TIHS
//Reducing duplicates with utility Types




//Mutability
type AlbumGenre = "rock" | "country" | "electronic"
let albumGenre = "rock"

const handleGenre =(genre:AlbumGenre)=>{

}
console.log(albumGenre)

enum Paymentstats{
  pending= 'pending',
  declined= 'declined',
  accepted= 'accepted',
}

type user ={
  name:string,
  status:Paymentstats;
}

//lets retrieve the payment status form a database
const statusPayment = "pending"

const JooyUser:user ={
  name: "Jooy",
  status: Paymentstats[statusPayment],
}
console.log(JooyUser)

