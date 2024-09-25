var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
function fetchData() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("https://run.mocky.io/v3/129fd091-e6e5-4508-a077-5857ff34d003")];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
fetchData().then(function (data) {
    console.log(data);
});
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
//Exercise 7: Narrowing unknown to a Value
// const parseValue = (value: unknown) => {
//   if (true) {
//     return value.data.id
//   }
//   throw new Error('Parsing error!')
// }
