import * as readline from 'readline';

class Theatre {
    seats: boolean[]; // Array to track seat availability (true = booked, false = available)
    totalSeats: number;

    constructor(totalSeats: number) {
        this.totalSeats = totalSeats;
        this.seats = Array(totalSeats).fill(false); // Initialize all seats as available (false)
    }

    bookSeat(seatNumber: number): boolean {
        if (this.seats[seatNumber]) {
            console.log(`Seat ${seatNumber + 1} is already booked.`);
            return false;
        }
        this.seats[seatNumber] = true; // Mark the seat as booked
        console.log(`Seat ${seatNumber + 1} booked successfully.`);
        return true;
    }

    cancelSeat(seatNumber: number): boolean {
        if (!this.seats[seatNumber]) {
            console.log(`Seat ${seatNumber + 1} is not booked.`);
            return false;
        }
        this.seats[seatNumber] = false; // Mark the seat as available
        console.log(`Seat ${seatNumber + 1} cancellation successful.`);
        return true;
    }

    displaySeats(): void {
        console.log("Seat Status:");
        this.seats.forEach((booked, index) => {
            const status = booked ? "Booked" : "Available";
            process.stdout.write(`Seat ${index + 1}: ${status} | `);
        });
        console.log("\n");
    }
}

// Create a readline interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Initialize the Theatre with a certain number of seats
const theatre = new Theatre(10); // Example: 10 seats

// Function to start the application
function startApp() {
    console.log("Welcome to the Theatre Booking System!");
    console.log("1. Book Seat");
    console.log("2. Cancel Seat");
    console.log("3. Display Seats");
    console.log("4. Exit");

    rl.question("Please choose an option (1-4): ", (option) => {
        switch (option) {
            case '1':
                rl.question("Enter seat number to book (1-10): ", (seat) => {
                    theatre.bookSeat(Number(seat) - 1);
                    startApp();
                });
                break;
            case '2':
                rl.question("Enter seat number to cancel (1-10): ", (seat) => {
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
