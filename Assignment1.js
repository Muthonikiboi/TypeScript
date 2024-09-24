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
//Exercise 7: Narrowing unknown to a Value
// const parseValue = (value: unknown) => {
//   if (true) {
//     return value.data.id
//   }
//   throw new Error('Parsing error!')
// }
