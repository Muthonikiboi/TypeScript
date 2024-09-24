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