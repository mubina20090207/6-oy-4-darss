export class Car {
    id: number;
    model: string;
    brandId: number;
    year: number;

    constructor(id: number, model: string, brandId: number, year: number) {
        this.id = id;
        this.model = model;
        this.brandId = brandId;
        this.year = year;
    }

    static createCar(id: number, model: string, brandId: number, year: number): Car {
        return new Car(id, model, brandId, year);
    }

    updateCar(model: string, brandId: number, year: number): void {
        this.model = model;
        this.brandId = brandId;
        this.year = year;
    }

    static deleteCar(car: Car): void {
        // Logic to delete the car record
    }
}