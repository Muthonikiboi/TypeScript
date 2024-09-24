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
