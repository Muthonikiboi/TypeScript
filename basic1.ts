const acceptObject = (obj :{foo:string; bar:number ;baz : boolean;}) => {
    console.log(obj.foo);
    console.log(obj);
};
acceptObject(
    {
        foo: 'Hello',
        bar: 123,
        baz: true,
    }
)

const my_obj={}
// const my_Result=obj.foo

//Checking errors
const a = null;
// a.toString();

//3:Warnings close to the source of problem
type Album ={
    artist : string;
    title : string;
    year:number;
}

const album : Album = {
    artist : "TV",
    title : "TV Show",
    year: 2021,
}


const loginUser =(user:{job: {title: string}})=>{
    console.log(user);
}

const user1 ={
    job: {
        title: "Librarian",
    },
}

const user2={
    job: {
        title: "Lecturer",
    },
}

const user3={
    job: {
        title: "Student",
    },
}

const user4={
    job: {
        title: "Trainer",
    },
}

loginUser(user1)
loginUser(user2)
loginUser(user3)
loginUser(user4)

const run = (message :String)=>{
    console.log(message);
}

run("Hello, World!")


const myFunct =(a:number ,b:number)=>{
    return a+b;
}

console.log(myFunct(24,56))

const Testing =(message :string)=>{
    console.log(message);
}

Testing("I am testing id nodemon and --watch are working properly💥💥💥");

const wildAnimal =(animal:{name:string, age:number ,species:string})=>{
    console.log(animal);
}

//Optional you use ?
const wildAnimal1 =(animal:{name:string, age?:number ,species:string})=>{
    console.log(animal);
}

wildAnimal({name: "Elephant", species: "Mammal"})//Property age is missing
wildAnimal1({name: "Elephant", species: "Mammal"})

const contactName=(user :{first:string,last:string }) =>{
    return `${user.first} ${user.last}`
}


//Type Aliases
type school ={
    name: string;
    level: string;
    yearDeveloped:number;
}

const mySchool : school ={
    name:"Dedan Kimathi University of Technology",
    level: "University",
    yearDeveloped: 1990,
}

console.log(mySchool);

const lilians =(herschool:school)=>{
    console.log(herschool);
}
lilians({name:"St.Claire Gils",level:"HighSchool",yearDeveloped:1950})

//Array Syntax
let albums: string[ ]=[
    "Rubber Soul",
    "Revolver",
    "Sgt,Pepper's Lonely Hearts Club Band",
]
let dates:number[] =[1234,1234,23456,23456]

let album2: Array<string> = [
  "Rubber Soul",
  "Revolver",
  "Sgt, Pepper's Lonely Hearts Club Band",
];
let dates2: Array<number> =[
    1234,
    1234,
    23456,
    23456,
]
console.log(albums ,album2, dates, dates2)

//Tuples----Immutable(array with fixed number of elements)

let album4 : [string ,number] = ["Rubber soul",1980]











//UNIONS AND LITERALS
const messages = Date.now() %2 === 0 ? ' Hello There ' : null;

const loginID =(id : string|number) =>{
    console.log(id);
}

loginID(123);
loginID("abc");
// loginID(true);//type boolean is not supported

//Declarering union types
type id = string|number

const logID=( id : id)=>{
    console.log(id);
}
logID('sdfghjkl');
logID(123456);

type everything = string|number|boolean|object|null|{
    age: number;
    name: string;
    hobbies: string[];
}

const myObj : everything = {
    age: 23,
    name: 'John',
    hobbies: ['Reading', 'Cooking', 'Gardening'],
}
console.log(myObj);

//Literal Types
type color = 'black'|'white'|'green'|'yellow';
type yesorno = 'yes'|'no';

const myColor =(color:color,yesorno:yesorno)=>{
    console.log(`Do I love the ${color} color? ${yesorno}.`);
}

myColor('yellow', 'yes');
myColor('black','no');
myColor('white', 'no');

//NARROWING
// let myVar : string | number = 'Muthonikiboi';

// if(typeof myVar ==='string'){
//     myVar = myVar.toUpperCase();
// }
// console.log(myVar);

//NB: Unions are wider than Their members.
const logging =(id:string |number)=>{
    console.log(id);
}
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
const getAlbumYear = (year: string | number) => {
    if (typeof year === 'string') {
      console.log(`The album was released in ${year.toUppercase()}.`) // `year` is string
    } else if (typeof year === 'number') {
      console.log(`The album was released in ${year.toFixed(0)}.`) // `year` is number
    }
  }
