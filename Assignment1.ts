//ESSENTIAL TYPES AND ANNOTATIONS
//Exercise 1:Optional Function Parameters
const concatName = (first: string, last?: string) => {//we use a question mark to show optional parameters
  if (!last) {
    return first;
  }

  return `${first} ${last}`;
};
const result4 = concatName("John", "Doe");
console.log(result4);
const result5 = concatName("John");
console.log(result5);

//Exercise 2:Default Function Parameters


//Exercise 3: Rest Parameters
function concatenate(...strings:string[]) {
    return strings.join("");
  }
console.log(concatenate("Joy","Elizabeth","Muthoni","Kiboi"));

//Exercise 4:Function Types
type User = {
  id: string;
  name: string;
};

const modifyUser = (user: User[], id: string, makeChange:()=>any) => {
  return user.map((u) => {
    if (u.id === id) {
      return makeChange(u);
    }

    return u;
  });
};

//Exercise 5: Functions Returning void

// const addClickEventListener = (listener:()=>void) => {
//     document.addEventListener("click", listener);
//   };
  
//   addClickEventListener(() => {
//     console.log("Clicked!");
//   });

//Exercise 6:Void and Undefined
const acceptsCallback = (callback: () => void) => {
  callback();
};

const returnString = () => {
  return "Hello!";
};

acceptsCallback(returnString);

//Exercise 7:Typing Async Await
// async function fetchData() {
//   const response = await fetch("https://run.mocky.io/v3/129fd091-e6e5-4508-a077-5857ff34d003");

//   const data = await response.json();

//   return data;
// }

// fetchData().then((data) => {
//   console.log(data);
// });

//UNIONS LITERALS AND NARROWING

//Exercise 1: string or null
const getUsername=(username: string | null)=> {
    if (username !== null) {
      return `User: ${username}`
    } else {
      return 'Guest'
    }
  }

  const result =console.log(getUsername('Alice'));
  
  const result2 = console.log(getUsername(null));

//Exercise 2:Restricting  Function Prarameters
const move =(direction: 'up' | 'down' | 'right' | 'left', distance: number)=>{
    console.log(`Moving a distance of ${distance} units ${direction}`);
}

move('up', 10);
move('left', 5);

//Exercise 3:Narrowing with if statement
function validateUsername(username: string | null): boolean {
  if(username){
    return username.length > 5
  }

  return false
}

validateUsername("Muthonikiboi")

//Exercise 4:Throwing Errors to Narrow
// const appElement = document.getElementById('app')
// if (!appElement) {
//   throw new Error('Could not find app element')
// }

// console.log(appElement)

//Exercise 5:#Using in to Narrow
type APIResponse =
  | {
      data: {
        id: string
      }
    }
  | {
      error: string
    }

const handleResponse = (response: APIResponse) => {
  // How do we check if 'data' is in the response?=======solve using IN...

  if ('data' in response) {
    return response.data.id
  } else {
    throw new Error(response.error)
  }
}

// Exercise 6: Narrowing Errors with instanceof
const somethingDangerous = () => {
  if (Math.random() > 0.5) {
    throw new Error('Something went wrong')
  }

  return 'all good'
}

try {
  somethingDangerous()
} catch (error) {
  if (true) {
    console.error(error.message)
  }
}

//Exercise 7: Narrowing unknown to a Value
// const parseValue = (value: unknown) => {
//   if (true) {
//     return value.data.id
//   }

//   throw new Error('Parsing error!')
// }

//Unions ,Literals and Narrowing final assignment
//Exercise 1: Destructuring a Discriminated Union
type Circle = {
  kind?: 'circle'
  radius: number
}
type Square = {
  kind: 'square'
  sideLength: number
}
type Shape = Circle | Square
function calculateArea(shape: Shape) {
  // Property 'sideLength' does not exist on type 'Shape'.
  // Property 'radius' does not exist on type 'Shape'.
    if (shape.kind === 'circle') {
      return Math.PI * shape.radius * shape.radius
    } else {
      return shape.sideLength * shape.sideLength
    }
  }

// Exercise 2: Narrowing a Discriminated Union with a Switch Statement
function calculateArea1(shape: Shape) {
  switch(shape.kind){
    case "circle":
      return Math.PI * shape.radius * shape.radius;
      break;
    case "square":
      return shape.sideLength * shape.sideLength;
      break;
    default:
      console.log("none of the two shape is existent");
      break;
  }
}

//Exercise 3: Discriminated Tuples
// type APIResponse = [string, User[] | string]
// async function fetchData(): Promise<APIResponse> {
//   try {
//     const response = await fetch('https://api.example.com/data')

//     if (!response.ok) {
//       return [
//         'error',
//         // Imagine some improved error handling here
//         'An error occurred',
//       ]
//     }

//     const data = await response.json()

//     return ['success', data]
//   } catch (error) {
//     return ['error', 'An error occurred']
//   }
// }

//Exercise 4: Handling Defaults with a Discriminated Union.
function calculateArea4(shape: Shape) {
  if (shape.kind === 'circle') {
    return Math.PI * shape.radius * shape.radius
  } else {
    return shape.sideLength * shape.sideLength
  }
}

// ------EXTENDING OBJECTS------

// Exercise 1: Create an Intersection Type
type User1 = {
  name: string;
  email: string;
} & BaseEntity;

type Product = {
  name: string;
  price: number;
} & BaseEntity;

type BaseEntity = {
  id: string;
  createdAt: Date;
};

// Exercise 2: Extending Interfaces
interface User3 extends BaseEntity2 {
  name: string;
  email: string;
}

interface Product2 extends BaseEntity2 {
  name: string;
  price: number;
}

interface BaseEntity2 {
  id: string;
  createdAt: Date;
}

// -------DYNAMIC OBJECTS KEYS-------

// Exercise 1: Use an Index Signature for Dynamic Keys
const scores: { [key: string]: number } = {};

scores.math = 95;
scores.english = 90;
scores.science = 85;

// Exercise 2: Default Properties with Dynamic Keys
interface Scores {
  [subject: string]: number;
  math: number;
  english: number;
  science: number;
}

// @ts-expect-error science should be provided
const scores1: Scores = {
  math: 95,
  english: 90,
};

scores1.athletics = 100;
scores1.french = 75;
scores1.spanish = 70;

// Exercise 3: Restricting Object Keys With Records
type Environment = 'development' | 'production' | 'staging';

type Configurations = Record<
  Environment,
  { apiBaseUrl: string; timeout: number }
>;

const configurations: Configurations = {
  development: {
    apiBaseUrl: 'http://localhost:8080',
    timeout: 5000,
  },
  production: {
    apiBaseUrl: 'https://api.example.com',
    timeout: 10000,
  },
  staging: {
    apiBaseUrl: 'https://staging.example.com',
    timeout: 8000,
  },
  // @ts-expect-error
  notAllowed: {
    apiBaseUrl: 'https://staging.example.com',
    timeout: 8000,
  },
};

// Exercise 4: Dynamic Key Support
const hasKey = (obj: object, key: string | number) => {
  return obj.hasOwnProperty(key);
};

//--------REDUCING DUPLICATION WITH UTILITY TYPES------------

// Exercise 1: Expecting Certain Properties
interface User3 {
  id: string;
  name: string;
  email: string;
  role: string;
}

type Excluded = Omit<User3, 'id' | 'role'>;

const fetchUser = async (): Promise<Excluded> => {
  const response = await fetch('/api/user');
  const user = await response.json();
  return user;
};

const example = async () => {
  const user = await fetchUser();
};

// Exercise 2: Updating a Product
interface Product1 {
  id: number;
  name: string;
  price: number;
  description: string;
}

const updateProduct = (
  id: number,
  productInfo: Partial<Omit<Product1, 'id'>>
) => {
  //do something with productInfo
  console.log(
    `Updating product with id ${id} with the following info:`,
    productInfo
  );
};

updateProduct(1, {
  name: 'Book',
});

updateProduct(1, {
  price: 12.99,
});