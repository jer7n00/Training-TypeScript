"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Hotel_1 = require("./Hotel");
const HotelRoom_1 = require("./HotelRoom");
const hotel = new Hotel_1.Hotel();
// Adding rooms
hotel.addRoom(new HotelRoom_1.HotelRoom(101, "Single", 100));
hotel.addRoom(new HotelRoom_1.HotelRoom(102, "Double", 150));
hotel.addRoom(new HotelRoom_1.HotelRoom(103, "Suite", 250));
// Check availability
hotel.checkAvailability();
// Booking a room
const totalCost = hotel.bookRoom(101, 3);
console.log(`Total Cost: $${totalCost}`);
// Check availability again
hotel.checkAvailability();
// Check out
console.log(hotel.checkIn(101));
// Check availability after check out
hotel.checkAvailability();
