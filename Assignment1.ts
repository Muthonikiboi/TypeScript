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
async function fetchData() {
  const response = await fetch("https://run.mocky.io/v3/129fd091-e6e5-4508-a077-5857ff34d003");

  const data = await response.json();

  return data;
}

fetchData().then((data) => {
  console.log(data);
});

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