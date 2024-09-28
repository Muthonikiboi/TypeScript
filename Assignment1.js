//ESSENTIAL TYPES AND ANNOTATIONS
//Exercise 1:Optional Function Parameters
var concatName = function (first, last) {
    if (!last) {
        return first;
    }
    return "".concat(first, " ").concat(last);
};
var result4 = concatName("John", "Doe");
console.log(result4);
var result5 = concatName("John");
console.log(result5);
//Exercise 2:Default Function Parameters
//Exercise 3: Rest Parameters
function concatenate() {
    var strings = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        strings[_i] = arguments[_i];
    }
    return strings.join("");
}
console.log(concatenate("Joy", "Elizabeth", "Muthoni", "Kiboi"));
var modifyUser = function (user, id, makeChange) {
    return user.map(function (u) {
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
var acceptsCallback = function (callback) {
    callback();
};
var returnString = function () {
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
var getUsername = function (username) {
    if (username !== null) {
        return "User: ".concat(username);
    }
    else {
        return 'Guest';
    }
};
var result = console.log(getUsername('Alice'));
var result2 = console.log(getUsername(null));
//Exercise 2:Restricting  Function Prarameters
var move = function (direction, distance) {
    console.log("Moving a distance of ".concat(distance, " units ").concat(direction));
};
move('up', 10);
move('left', 5);
//Exercise 3:Narrowing with if statement
function validateUsername(username) {
    if (username) {
        return username.length > 5;
    }
    return false;
}
validateUsername("Muthonikiboi");
var handleResponse = function (response) {
    // How do we check if 'data' is in the response?=======solve using IN...
    if ('data' in response) {
        return response.data.id;
    }
    else {
        throw new Error(response.error);
    }
};
// Exercise 6: Narrowing Errors with instanceof
var somethingDangerous = function () {
    if (Math.random() > 0.5) {
        throw new Error('Something went wrong');
    }
    return 'all good';
};
try {
    somethingDangerous();
}
catch (error) {
    if (true) {
        console.error(error.message);
    }
}
function calculateArea(shape) {
    // Property 'sideLength' does not exist on type 'Shape'.
    // Property 'radius' does not exist on type 'Shape'.
    if (shape.kind === 'circle') {
        return Math.PI * shape.radius * shape.radius;
    }
    else {
        return shape.sideLength * shape.sideLength;
    }
}
// Exercise 2: Narrowing a Discriminated Union with a Switch Statement
function calculateArea1(shape) {
    switch (shape.kind) {
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
function calculateArea4(shape) {
    if (shape.kind === 'circle') {
        return Math.PI * shape.radius * shape.radius;
    }
    else {
        return shape.sideLength * shape.sideLength;
    }
}
