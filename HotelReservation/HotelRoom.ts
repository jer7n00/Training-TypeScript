export class HotelRoom {
  id:number;
  roomType:string;
  pricePerNight:number;
  isAvailable:boolean;

    constructor(
         id: number,
        roomType: string,
       pricePerNight: number,
        isAvailable: boolean = true
    ) {
        this.id=id;
        this.roomType=roomType;
        this.pricePerNight=pricePerNight;
        this.isAvailable=isAvailable;
    }
}
