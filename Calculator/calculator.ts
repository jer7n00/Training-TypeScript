import * as readline from 'readline';

// Create a readline interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Promisify the readline question function
const question = (query: string): Promise<string> => {
    return new Promise(resolve => rl.question(query, resolve));
};

class Calculator {
    // Function for addition
    static add(a: number, b: number): number {
        return a + b;
    }

    // Function for subtraction
    static subtract(a: number, b: number): number {
        return a - b;
    }

    // Function for multiplication
    static multiply(a: number, b: number): number {
        return a * b;
    }

    // Function for division
    static divide(a: number, b: number): number | string {
        if (b === 0) {
            return "Error: Division by zero is not allowed.";
        }
        return a / b;
    }
}

// Function to perform calculations based on user input
async function calculate() {
    while (true) {
        const firstInput = await question("Enter first number: ");
        const num1 = parseFloat(firstInput);

        const secondInput = await question("Enter second number: ");
        const num2 = parseFloat(secondInput);

        const operation = await question("Choose an operation (+, -, *, /): ");
        let result: number | string;

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

        console.log(`Result: ${result}`);
        const answer = await question("Do you want to perform another calculation? (yes/no): ");
        if (answer.toLowerCase() !== 'yes') {
            console.log("Thank you for using the calculator!");
            break;
        }
    }
    rl.close();
}

// Start the calculator
calculate();
