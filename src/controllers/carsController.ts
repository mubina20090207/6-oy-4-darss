export class CarsController {
    private cars: Car[] = [];

    public addCar(car: Car): void {
        this.cars.push(car);
    }

    public updateCar(id: number, updatedCar: Car): void {
        const index = this.cars.findIndex(car => car.id === id);
        if (index !== -1) {
            this.cars[index] = updatedCar;
        }
    }

    public deleteCar(id: number): void {
        this.cars = this.cars.filter(car => car.id !== id);
    }

    public getCars(): Car[] {
        return this.cars;
    }
}