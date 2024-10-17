import { HotelRoom } from './HotelRoom';

export class Hotel {
    private rooms: HotelRoom[] = [];

    addRoom(room: HotelRoom): void {
        this.rooms.push(room);
        console.log(`Room ${room.id} added: ${room.roomType}`);
    }

    checkAvailability(): void {
        console.log("Available Rooms:");
        this.rooms.forEach(room => {
            if (room.isAvailable) {
                console.log(`Room ID: ${room.id}, Type: ${room.roomType}, Price: $${room.pricePerNight} per night`);
            }
        });
    }

    bookRoom(roomId: number, nights: number): number | string {
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

    checkIn(roomId: number): string {
        const room = this.rooms.find(r => r.id === roomId);
        
        if (room && !room.isAvailable) {
            room.isAvailable = true; // Mark room as available again
            return `Checked out from Room ${roomId}.`;
        }
        
        return `Room ${roomId} is not currently booked.`;
    }
}
