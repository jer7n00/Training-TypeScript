"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelRoom = void 0;
class HotelRoom {
    constructor(id, roomType, pricePerNight, isAvailable = true) {
        this.id = id;
        this.roomType = roomType;
        this.pricePerNight = pricePerNight;
        this.isAvailable = isAvailable;
    }
}
exports.HotelRoom = HotelRoom;
