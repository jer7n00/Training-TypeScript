"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var Theatre = /** @class */ (function () {
    function Theatre(totalSeats) {
        this.totalSeats = totalSeats;
        this.seats = Array(totalSeats).fill(false); // Initialize all seats as available (false)
    }
    Theatre.prototype.bookSeat = function (seatNumber) {
        if (this.seats[seatNumber]) {
            console.log("Seat ".concat(seatNumber + 1, " is already booked."));
            return false;
        }
        this.seats[seatNumber] = true; // Mark the seat as booked
        console.log("Seat ".concat(seatNumber + 1, " booked successfully."));
        return true;
    };
    Theatre.prototype.cancelSeat = function (seatNumber) {
        if (!this.seats[seatNumber]) {
            console.log("Seat ".concat(seatNumber + 1, " is not booked."));
            return false;
        }
        this.seats[seatNumber] = false; // Mark the seat as available
        console.log("Seat ".concat(seatNumber + 1, " cancellation successful."));
        return true;
    };
    Theatre.prototype.displaySeats = function () {
        console.log("Seat Status:");
        this.seats.forEach(function (booked, index) {
            var status = booked ? "Booked" : "Available";
            process.stdout.write("Seat ".concat(index + 1, ": ").concat(status, " | "));
        });
        console.log("\n");
    };
    return Theatre;
}());
// Create a readline interface for user input
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Initialize the Theatre with a certain number of seats
var theatre = new Theatre(10); // Example: 10 seats
// Function to start the application
function startApp() {
    console.log("Welcome to the Theatre Booking System!");
    console.log("1. Book Seat");
    console.log("2. Cancel Seat");
    console.log("3. Display Seats");
    console.log("4. Exit");
    rl.question("Please choose an option (1-4): ", function (option) {
        switch (option) {
            case '1':
                rl.question("Enter seat number to book (1-10): ", function (seat) {
                    theatre.bookSeat(Number(seat) - 1);
                    startApp();
                });
                break;
            case '2':
                rl.question("Enter seat number to cancel (1-10): ", function (seat) {
                    theatre.cancelSeat(Number(seat) - 1);
                    startApp();
                });
                break;
            case '3':
                theatre.displaySeats();
                startApp();
                break;
            case '4':
                console.log("Thank you for using the Theatre Booking System!");
                rl.close();
                break;
            default:
                console.log("Invalid option. Please try again.");
                startApp();
                break;
        }
    });
}
// Start the application
startApp();
