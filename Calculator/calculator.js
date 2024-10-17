"use strict";
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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
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
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
// Create a readline interface for user input
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Promisify the readline question function
var question = function (query) {
    return new Promise(function (resolve) { return rl.question(query, resolve); });
};
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    // Function for addition
    Calculator.add = function (a, b) {
        return a + b;
    };
    // Function for subtraction
    Calculator.subtract = function (a, b) {
        return a - b;
    };
    // Function for multiplication
    Calculator.multiply = function (a, b) {
        return a * b;
    };
    // Function for division
    Calculator.divide = function (a, b) {
        if (b === 0) {
            return "Error: Division by zero is not allowed.";
        }
        return a / b;
    };
    return Calculator;
}());
// Function to perform calculations based on user input
function calculate() {
    return __awaiter(this, void 0, void 0, function () {
        var firstInput, num1, secondInput, num2, operation, result, answer;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!true) return [3 /*break*/, 5];
                    return [4 /*yield*/, question("Enter first number: ")];
                case 1:
                    firstInput = _a.sent();
                    num1 = parseFloat(firstInput);
                    return [4 /*yield*/, question("Enter second number: ")];
                case 2:
                    secondInput = _a.sent();
                    num2 = parseFloat(secondInput);
                    return [4 /*yield*/, question("Choose an operation (+, -, *, /): ")];
                case 3:
                    operation = _a.sent();
                    result = void 0;
                    switch (operation) {
                        case '+':
                            result = Calculator.add(num1, num2);
                            break;
                        case '-':
                            result = Calculator.subtract(num1, num2);
                            break;
                        case '*':
                            result = Calculator.multiply(num1, num2);
                            break;
                        case '/':
                            result = Calculator.divide(num1, num2);
                            break;
                        default:
                            result = "Invalid operation.";
                    }
                    console.log("Result: ".concat(result));
                    return [4 /*yield*/, question("Do you want to perform another calculation? (yes/no): ")];
                case 4:
                    answer = _a.sent();
                    if (answer.toLowerCase() !== 'yes') {
                        console.log("Thank you for using the calculator!");
                        return [3 /*break*/, 5];
                    }
                    return [3 /*break*/, 0];
                case 5:
                    rl.close();
                    return [2 /*return*/];
            }
        });
    });
}
// Start the calculator
calculate();
