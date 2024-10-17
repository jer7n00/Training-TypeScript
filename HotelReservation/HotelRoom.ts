export class HotelRoom {
    constructor(
        public id: number,
        public roomType: string,
        public pricePerNight: number,
        public isAvailable: boolean = true
    ) {}
}
