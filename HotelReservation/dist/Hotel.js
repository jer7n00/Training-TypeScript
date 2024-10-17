"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hotel = void 0;
class Hotel {
    constructor() {
        this.rooms = [];
    }
    addRoom(room) {
        this.rooms.push(room);
        console.log(`Room ${room.id} added: ${room.roomType}`);
    }
    checkAvailability() {
        console.log("Available Rooms:");
        this.rooms.forEach(room => {
            if (room.isAvailable) {
                console.log(`Room ID: ${room.id}, Type: ${room.roomType}, Price: $${room.pricePerNight} per night`);
            }
        });
    }
    bookRoom(roomId, nights) {
        const room = this.rooms.find(r => r.id === roomId);
        if (!room) {
            return "Room not found.";
        }
        if (!room.isAvailable) {
            return `Room ${roomId} is not available.`;
        }
        room.isAvailable = false; // Mark room as booked
        const totalCost = room.pricePerNight * nights;
        console.log(`Room ${roomId} booked for ${nights} nights. Total cost: $${totalCost}`);
        return totalCost;
    }
    checkIn(roomId) {
        const room = this.rooms.find(r => r.id === roomId);
        if (room && !room.isAvailable) {
            room.isAvailable = true; // Mark room as available again
            return `Checked out from Room ${roomId}.`;
        }
        return `Room ${roomId} is not currently booked.`;
    }
}
exports.Hotel = Hotel;
